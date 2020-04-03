const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Node.JS!'));

app.listen(3000, () => {
    console.log('My REST API for MailingList running on port 3000!');
})