const express = require("express");

// routers
const apiRouter = express.Router();
const accountRouter = require('./api/accountRouter');

// config server
const server = express();
server.use(express.json());
// base router
server.use('/api/v1', apiRouter)
// account router
apiRouter.use('/accounts', accountRouter);


module.exports = server;
