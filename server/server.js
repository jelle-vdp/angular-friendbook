const express = require('express');
const bodyParser = require('body-parser');  
const crypto = require('crypto');
const app = express();


const PORT = 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{id: crypto.randomUUID(), firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', phoneNumber: '0469420666', favouriteLanguage: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.get('/allfriends', function (request, response) {
    response.send(JSON.stringify(allFriends));
});

app.post('/allfriends', function (request, response) {
    allFriends.push(request.body);
    response.status(200).send({"message": "Data received"});
});

app.delete('/deletefriend/:id', function (request, response) {
    allFriends.splice(request.params.id, 1);
    response.status(200).send({"message": "Data received"});
});

app.listen(PORT, function () {});
