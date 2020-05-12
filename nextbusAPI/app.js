const serverless = require('serverless-http');
const express = require('express');

// Embedded
var app = new express();
var restbus = require('restbus');

// (As express middleware)
app.use('/restbus', restbus.middleware());
// app.listen(3000);

app.get('/', (req, res) => {
    res.send('Hello World')
});

module.exports.lambdaHandler = serverless(app);