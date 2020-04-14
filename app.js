const express = require('express');
const app = express();
const sender = require('./send.js');

app.get('/', (req, res) => res.send('Hello from Node.JS, this is going to be the REST API for our mailinglist!'));

app.listen(3000, () => {
    console.log('My REST API for MailingList running on port 3000!');
})