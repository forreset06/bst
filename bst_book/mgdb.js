
const MongoClient = require('mongodb').MongoClient;
const js_data = require('./index.js');
const uri = "mongodb+srv://ruut:<password>@cluster0-jqspv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
    var cur = collection.find({});
    
    cur.forEach( function( data){
        data = data;
    });
  client.close();
});
