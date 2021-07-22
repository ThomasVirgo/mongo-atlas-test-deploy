const express = require('express');
const cors = require('cors');
const { User } = require('./models/user');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req,res) => {
    res.json('Server is up and running - lovely jubbly!');
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

module.exports = { server };