const { server } = require('./server');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server listening at http://localhost:${port}/`));