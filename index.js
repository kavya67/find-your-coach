const express = require('express');
const mongoose = require('./config/database');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRouter = require('./app/controllers/userController');
const coachRouter = require("./app/controllers/coachController");
const locationRouter = require("./app/controllers/locationController");
const reviewRouter = require("./app/controllers/reviewController");
const bookingRouter = require("./app/controllers/bookingController");

const port = 3004;

app.use('/users', userRouter);
app.use('/coach', coachRouter);
app.use('/locations', locationRouter);
app.use('/reviews', reviewRouter);
app.use('/booking', bookingRouter);

app.listen(port,()=>{
    console.log('listening to port', port);
})