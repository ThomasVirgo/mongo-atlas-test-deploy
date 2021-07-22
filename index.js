const { server } = require('./server');
require('dotenv').config();
// console.log(process.env.MONGODB_URI)
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server listening at http://localhost:${port}/`));