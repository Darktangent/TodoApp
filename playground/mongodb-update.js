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
 db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5be45fc10cf7ae85800dfb61')
 },{$set:{completed:true}},{
  returnOriginal:false
 }).then((result)=>{
  console.log(result)
 })


  client.close()
})