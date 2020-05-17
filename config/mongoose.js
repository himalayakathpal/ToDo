const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to db'));
db.once('open',function(){

    console.log('db successfully connected');
});