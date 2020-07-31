// Enviroment variables
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const app = express();

const server = require('http').Server(app);

const indexRoute = require('./routes/index');

const port = process.env.PORT || 3000;

app.use('/static', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRoute);

server.listen(port, (err) => {
    if (err) throw err;

    console.log(`-> Running at port: ${port}`);
});
