const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Error Connecting To The Database: ', err);
    } else {

        console.log('Connected to the database: ' + config.uri);
    }
});

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', (req, res) => {
    res.sendFile(path.join((__dirname + '/client/dist/client/index.html')));
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});