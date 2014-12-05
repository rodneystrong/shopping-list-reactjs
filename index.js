var NODE_ENV = process.env.NODE_ENV,
   express = require('express'),
   bodyParser = require('body-parser');
   server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

require('./app')(server);


if (NODE_ENV === 'production') {
   server.listen(9000, 'localhost');
} else {
   // Export server in dev to work with grunt-express
   module.exports = server;
}
