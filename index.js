const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on: ${port}`);
})