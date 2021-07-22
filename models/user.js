const { init } = require('../db/init');

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