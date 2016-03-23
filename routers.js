var express = require('express');
var router = express.Router();

var getTime = function(request, response, next) {
  request.time = Date.now();
  next();
}

router.use(getTime);


router.get('/', function(request, response, next) {
  response.header('content-type', 'text/html');
  response.send('<h1>TEST @' + request.time + '</h1>');
  next();
})

module.exports = router;