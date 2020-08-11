// import node and 3rd party libs
require('dotenv').config();
const http = require('http');
const https = require('https');
// import my modules and libs
const server = require("./server.js");
// config app
const PORT = process.env.PORT || 4000;

http.createServer(server).listen(PORT);
console.log(`\n== API running on port ${PORT} ==\n`);

// server.listen(PORT, () => {
//   console.log(`\n== API running on port ${PORT} ==\n`);
// });
