/**
 * Created by Taru on 25.2.2016.
 */

/**
 * Variables for required modules
  * @type {*|exports|module.exports}
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/**
 * App instance
 */

var app = express();

// Loading controllers
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');
var characterController = require('./server/controllers/character-controller');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));

mongoose.connect('mongodb://localhost:27017/time-waste');

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html')
});

// User control (includes authentication and signup)
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

// Profile operations
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);

//Character operations
app.get('/api/characters/list', characterController.listCharacters);
app.post('/api/characters/newcharacter', characterController.addCharacter);
app.delete('/api/characters/delete/:id', characterController.deleteCharacter);

app.listen(3000, function() {
    console.log('Listening on 3000');
});