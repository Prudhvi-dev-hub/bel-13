const express = require('express');
const {logger} = require('./middlewares/consoleLogger');
const coursesRouter = require('./routes/coursesRoute');

const app = express();
app.use(logger);
app.use("/api/v1/courses", coursesRouter);  // mounting of a route  JSON 

// Health Check
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`);
});


