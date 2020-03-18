var express = require('express');
var app = express();


//The mongoose module allows us to connect to our Database, and run functions such as save quite easily
var mongoose = require('mongoose');

//.connect() requires the URL for our database, in this example, the connection is being made to a local instance of MongoDB
// We are also passing in some 'options' here (useUnifiedTopology and useNewUrlParser) as some functionality is changing in MongoDB
//and this will avoid us receiving error messages in our console log.
mongoose.connect('mongodb://localhost:27019/testCollection', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected to DB')//Upon Successful connection, we are using a Javasctipt .then block here to give us a message in in our console 
    })
    .catch((err) => {
        console.log('Not Connected to DB : ' + err);//Upon unuccessful connection, we are using a Javasctipt .catch block here to give us a message in in our console with err displayed so that we can see what the issue is.
    });

app.get('/', (req, res) => {
    res.send('This is the Home page');
});

app.get('/about', (req, res) => {
    res.send('This is the about Page');
})

//Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})