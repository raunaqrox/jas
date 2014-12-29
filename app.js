/* %%%%%%%%%%%%%%%%%%%%
 *
 * Dependencies & Global Variables
 *
 * 
 * %%%%%%%%%%%%%%%%%%%% */

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


/* %%%%%%%%%%%%%%%%%%%%
 *
 *   Middleware & Routes
 *
 * 
 * %%%%%%%%%%%%%%%%%%%% */

var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./routes/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json());

//session
app.use(session({
    secret:'jAaScRAper',
    cookie:{secret:true}
}));


// js css img
app.use(express.static(__dirname+'/public'));

// jade
app.set('view engine','jade');

// views
app.set('views',__dirname+'/views');

/* %%%%%%%%%%%%%%%%%%%%
 *
 * Routes 
 *
 * %%%%%%%%%%%%%%%%%% */

app.get('/', index.home);
app.post('/fun', index.fun);

/* %%%%%%%%%%%%%%%%%%%%
 *
 *  Listening on port 3000
 *
 * %%%%%%%%%%%%%%%%%% */

app.listen(port, function(){

    console.log("Listening to port : "+port);

});
