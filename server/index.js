const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb+srv://Admin:admin2001@projectclusters.vjtbori.mongodb.net/oldSoul?retryWrites=true&w=majority";
mongoose.connect(url)

const womenRouter = require('./routes/women.js')
const menRouter = require('./routes/men.js')

app.use('/women', womenRouter)
app.use('/men', menRouter)

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(8000, () => {
    console.log("Server is Running");
})

