const express = require('express');
const cors = require('cors');
const { User } = require('./models/user');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req,res) => {
    res.json('Server is up and running - lovely jubbly!');
})

server.get('/users', async(req,res) => {
    try{
        let data = await User.all;
        res.status(200).json(data);
    } catch (error){
        res.status(500).json('soz couldnt get all users for ya')
    }
})

server.get('/users/:id', async(req,res) => {
    try{
        let data = await User.findById(req.params.id);
        res.status(200).json(data);
    } catch (error){
        res.status(404).json('could not find this user')
    }
})

server.post('/users', async (req,res) => {
    try {
        let data = req.body;
        let newUser = await User.create(data);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json('unable to create a new user');
    }
})

server.delete('/users', async(req,res)=>{
    try{
        await User.deleteCollection
        res.status(204).json('users collection successfully deleted')
    } catch(e){
        res.status(500).json('unable to delete users collection')
    }
})

module.exports = { server };