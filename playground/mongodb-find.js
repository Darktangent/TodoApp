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
  db.collection('Users').find({
    // _id: new ObjectID("5be4738c2ed5f74e1c353606")
    name: 'Jen'
  }).toArray().then((docs) => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err => {
    console.log('Unable to fetch todos', err)
  }))



  //client.close()
})