// Enviroment variables
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const app = express();

const server = require('http').Server(app);
const indexRoute = require('./routes/index');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Views
app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoute);

server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Running at port: ${port}`);
});
