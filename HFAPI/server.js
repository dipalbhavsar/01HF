var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var connStr = 'mongodb://localhost:27017/HFDB';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// mongoose.connect('mongodb://127.0.0.1/HFDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoute'); //importing route
routes(app); //register the route

app.listen(port);


console.log('HF list RESTful API server started on: ' + port);