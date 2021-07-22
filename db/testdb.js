
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://thomas:secretpass@cluster0.v8ng7.mongodb.net/testDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const init = async () => {
    let client = await MongoClient.connect(uri)
    console.log('connected to database!')
    return client.db("testDatabase")
  }

  init()