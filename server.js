var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testCollection', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected')
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