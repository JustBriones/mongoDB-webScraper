//require dependencies
var express = require('express');

//set up port to be host's designated port, or 3000
var PORT = process.env.PORT || 3000;

//initiate express app
var app = express();

//set up express router
var router = express.Router();

//designate our public folder as a static directory
app.use(express.static(__dirname + '/public'));

//have every request go through router middleware
app.use(router);

//listen on PORT
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});
