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
  //deleteMany deleteOne findOneAndDelete
  // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result)=>{console.log(result)
  // })
db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result)=>{console.log(result)
  })
db.collection('Todos').findOneAndDelete({text: "Eat Lunch"}).then((result)=>{console.log(result)
  })




  client.close()
})