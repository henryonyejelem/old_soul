require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.REACT_APP_DB_CONNECTION_STRING;
mongoose.connect(url)

const womenRouter = require('./routes/women.js')
const menRouter = require('./routes/men.js')
const userRouter = require('./routes/user.js')

app.use('/women', womenRouter)
app.use('/men', menRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(8000, () => {
    console.log("Server is Running");
})

