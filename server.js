//require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');

//set up port to be host's designated port, or 3000
var PORT = process.env.PORT || 3000;

//initiate express app
var app = express();

//set up express router
var router = express.Router();

//designate our public folder as a static directory
app.use(express.static(__dirname + '/public'));

//connect handlebars to our express app
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//use bodyparser in app
app.use(bodyParser.urlencoded({
  extended: false
}));

//have every request go through router middleware
app.use(router);

//if deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';


//connect mongoose to our database
mongoose.createConnection(db, function(error) {
  //log errors connecting with mongoose
  if (error) {
    console.log(error)
  }
  else (
    console.log('mongoose connection is successful')
  )
});

//listen on PORT
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});
