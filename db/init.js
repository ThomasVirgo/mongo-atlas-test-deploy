const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://thomas:secretpass@cluster0.v8ng7.mongodb.net/testDatabase?retryWrites=true&w=majority";

const init = async () => {
    try {
        console.log('in the init function!')
        let client = await MongoClient.connect(uri)
        console.log('connected to database!')
        // let data = await client.db("testDatabase").collection('users').insertOne({
        //     "name": "tom"
        // })
        // console.log(data);
        return client.db("testDatabase")
    } catch (error){
        console.log(error);
    }
    
  }

module.exports = { init };
