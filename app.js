//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();
var mongoose = require('mongoose');
var userSchema = require('./userSchema');
//load environment variables
var dotenv = require('dotenv');
dotenv.load();

// Paths
var index = require('./routes/index');
var application = require('./routes/application');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log('Connected to database');
	var userSchema = mongoose.Schema({
		name: String
	})

	userSchema.methods.speak = function speak() {
		var greeting = this.name
		? "My name is " + this.name
		: "I don't have a name"
		console.log(greeting);
	}
	var User = mongoose.model('User', userSchema);
	var Nathan = new User({ "name": 'Nathan' });
	Nathan.speak();
});

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());
//more setting up configuration for express
//Allows cookie access and interaction
app.use(express.cookieParser() );
app.use(express.session({ secret: 'nyan cat'}));

//routes
app.get('/', index.view);
//app.get('/application', application.view);

//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});