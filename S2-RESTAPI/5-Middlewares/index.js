require('dotenv').config();

const express = require("express");

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]

const app = express();

const logger = (req, res, next) => {
    console.log(`${new Date()} Request received on ${req.url}, ${req.id}}`);
    next();         //Passes the execution to the next avaialable function 
}

const logger1 = (req, res, next) => {
    console.log("This middleware strips sensitive information like password, credit card info ... from the body of the request");
    next();        
}

app.use(express.json());  // Express version 4.16 (body-parser)

app.get('/api/v1/courses', (req, res) => {
    return res.send(courses);
})

app.use(logger); 


app.get('/api/v1/courses/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    const course = courses.find(c => c.id === parseInt(courseId));

    if (!course) {
        return res.status(404).send({"message": `Course: ${courseId} not found`})
    }
    
    return res.send(courses[courseId]);
})



app.get('/', (req, res) => {
    res.send("Hello World");     
})

app.post('/api/v1/courses', [logger1], (req, res) => {
    const course = req.body;
    console.log(course);
    course.id = courses.length;
    
    courses.push(course);
    console.log("Added course to array");
    res.send(course);
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started successfully at port: ${PORT}` );
})