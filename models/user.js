const { init } = require('../db/init');
const { ObjectId } = require('mongodb')

class User{
    constructor(data){
        this.email = data.email;
        this.name = data.name;
        this.age = data.age;
    }

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let userData = await db.collection('users').find().toArray();
                resolve(userData);
            } catch (error){
                reject(error);
            }
        })
    }

    static get deleteCollection(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                await db.collection('users').drop();
                resolve('users collection dropped');
            } catch (error){
                reject(error);
            }
        })
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const data = await db.collection('users').find({_id: ObjectId(id)}).toArray();
                resolve(data);
            } catch (error){
                reject(error);
            }
        })
    }

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let userData = await db.collection('users').insertOne(data);
                let newUser = new User(data);
                resolve(newUser);
            } catch (error){
                reject(error);
            }
        })
    }
}

module.exports = { User };