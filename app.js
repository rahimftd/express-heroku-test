// Important modules
var express = require('express');
var router = require('./routers.js');

// Config variables
var ip = '127.0.0.1';
var port = 3000;

// Initialize app
var app = express();
app.listen(port, ip);

// Load routers
app.use(router);

