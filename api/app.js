require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors')


mongoose.connect(process.env.DB_HOST,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    
})

var db = mongoose.connection

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/availability', require('./routes/availabilityRoute'));
app.use('/reserve', require('./routes/reservationRoute'));
db.on("error", console.error.bind(console,"error:"));
db.once("open", _ =>{
    console.log("Connected to DB")
});

module.exports = app;
