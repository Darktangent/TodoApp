var express=require('express')
var bodyParser=require('body-parser')
var {ObjectID}= require('mongodb')
const {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')
const _ =require('lodash')


var app=express()
const port=process.env.PORT || 3000;
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
var todo= new Todo({
	text:req.body.text
})
todo.save().then((doc)=>{
	res.send(doc)
},(e)=>{
	res.status(400).send(e)
})

})

app.get('/todos',(req,res)=>{
	Todo.find()
		.then((todos)=>{
			res.send({todos})
		},(e)=>{
			res.status(400).send(e)
		})
})
app.get('/todos/:id', (req,res)=>{

	var id= req.params.id
	if(!ObjectID.isValid(id)){
		return res.status(404).send()
	}
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send()
		}
		res.send({todo})
	}).catch((e)=> res.status(400).send(''))

})
//delete by id
app.delete('/todos/:id',(req,res)=>{

var id=req.params.id
//if not valid ObjectID
if(!ObjectID.isValid(id)){
	return res.status(404).send()
}
Todo.findOneAndDelete(id).then((todo)=>{
	if(!todo){
		return res.status(404).send('')
	}
	res.status(200).send({todo})
}).catch((e)=> res.status(400).send())




})

//update

app.patch('/todos/:id',(req,res)=>{
	var id=req.params.id
	var body=_.pick(req.body,['text', 'completed'])
	if(!ObjectID.isValid(id)){
		return res.status(404).send()
	}

	if(_.isBoolean(body.completed)&& body.completed){
		body.completedAt= new Date().getTime();
	}else {
		body.completed=false
		body.completedAt=null
	}
	Todo.findByIdAndUpdate(id, {$set:body},{new:true})
	.then((todo)=>{
		if(!todo){
			return res.status(404).send()
		}
		res.send({todo})
	}).catch((e)=>{
		res.status(400).send()
	})
})



app.listen(port,()=>{
	console.log(`Started up at ${port}`)
})
module.exports={
	app
}








// var newTodo= new Todo({
// 	text:' Take the dog out ',
// 	completed:true,
// 	completedAt:123
// })
// newTodo.save().then((doc)=>{
// console.log('Saved todo',doc)
// },(e)=>{
// 	console.log('Unable to save', (e))
// })



// var newUser = new User({
// 	email:'me@example.com'
// })
// newUser.save().then((data)=>{
// 	console.log('Saved user',data)
// },(e)=>{
// 	console.log('Unabe to create user',e)
// })
