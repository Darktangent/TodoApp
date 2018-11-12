const {mongoose} = require('./../server/db/mongoose')
const {ObjectID} = require('mongodb')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user.js')


var id = '5be76c087b0b8404b4229f9b'
// var userid = '5be5e05ae3a63a06e00daaf1'
// if (!ObjectID.isValid()) {
//   console.log('ID not valid')
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todos', todos)
}).catch((e) => {
  console.log(e)
})
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found')
  }
  console.log('Todo by ID', todo)
}).catch((e)=>{console.log(e)})

User.findById('5be5e05ae3a63a06e00daaf1').then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log('User by ID', user)
}, (e) => {
  console.log(e)
})
