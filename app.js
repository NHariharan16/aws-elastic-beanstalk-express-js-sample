const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to the webpage'));
app.get('/', (req, res) => res.send('Hello everyone'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
