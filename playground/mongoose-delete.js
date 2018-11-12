const {mongoose} = require('./../server/db/mongoose')
const {ObjectID} = require('mongodb')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user.js')

//remove items

// Todo.remove({}).then((result)=>{
//   console.log(result)
// })
// Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5be9ce760452b6c977fe3a85').then((todo)=>{
  console.log(todo)

})
