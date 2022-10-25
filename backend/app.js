const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

require('dotenv/config');

// All time when we'll send / post requests, we'll convert to json body content.
app.use(cors());
app.use(bodyParser.json())

// Import Routes

const apiRoute = require('./routes')
app.use('/api', apiRoute);

//Conect to DB
mongoose
    .connect(process.env.DB, {})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log({ err }));
// mongoose.connect (
//     process.env.DB,
//     { useNewUrlParser: true },
//     () => console.log('Connected to DB')
// )

//Start server
app.listen(PORT);