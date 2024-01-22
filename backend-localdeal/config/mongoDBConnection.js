// mongoDBConnection.js
const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://alomj257:alomj257@cluster0.eesendj.mongodb.net/local-deal';

mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('DBConnection connection failed');
});

connection.on('connected', () => {
    console.log('DBConnection connected successfully');
});

module.exports = connection;
