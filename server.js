const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const app = express();

const server = require('http').Server(app);
const indexRoute = require('./routes/index');

const port = process.env.PORT || 3000;

app.use('/public' , express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.use('/', indexRoute);
app.get('*', (req, res) => {
    res.redirect('/pokemon/1');
})

server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Running at port: ${port}`);
});
