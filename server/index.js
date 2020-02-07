const express = require('express');
const app = express();
const CS = require('./controller');

app.use(express.json());


app.listen(4000, () => console.log('server listening on port 4000!!'))