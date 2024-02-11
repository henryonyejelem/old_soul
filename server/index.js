const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const womenRouter = require('./routes/women.js')

app.use('/women', womenRouter)

app.listen(8000, () => {
    console.log("Server is Running");
})

