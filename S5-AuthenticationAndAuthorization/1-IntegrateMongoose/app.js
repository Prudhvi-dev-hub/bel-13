require('dotenv').config(); 
const express = require('express');
const {logger} = require('./middlewares/consoleLogger');
const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');

const mongoose = require('mongoose');

const app = express();
app.use(logger);
app.use("/api/v1/courses", coursesRouter);  // mounting of a route  JSON 
app.use("/api/v1/users", usersRouter);  // mounting of a route  JSON 

// Health Check
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

// Application Bootstraping
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Atlas");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } 
);






