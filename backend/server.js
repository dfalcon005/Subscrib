const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const URI = process.env.DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

// const homeRouter = require('./routes/home');
const detailsRouter = require('./routes/details');
const addSubscriptionRouter = require('./routes/Subscription');

// app.use('/', homeRouter);
app.use('/details', detailsRouter);
app.use('/Subscription', addSubscriptionRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});