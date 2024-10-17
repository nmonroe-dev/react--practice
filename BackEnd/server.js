const express = require('express')
const connectDB = require('./config/database')
const cors = require('cors')
const dotenv = require('dotenv').config();
const todoRoutes = require('./routes/todoRoutes')
const app = express();

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', todoRoutes);

app.listen(process.env.PORT, ()=> {
    console.log(`Running on Port ${process.env.PORT}`)
});