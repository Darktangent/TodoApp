//const MongoClient = require('mongodb').MongoClient
const {
  MongoClient,
  ObjectID
} = require('mongodb')
// var obj = new ObjectID;
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify((result, undefined, 2)))
  // })
  db.collection('Users').insertOne({
    name: "Esha Ganguly",
    age: 18,
    location: 'Houston'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', result)
    }
    console.log(result.ops[0]._id.getTimestamp())
  })



  client.close()
})