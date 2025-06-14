require('dotenv').config();

const express = require("express");
// Designing the course rating app
// - Create a course: POST /api/v1/courses
// body

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

app.use(express.json());  // Express version 4.16 (body-parser)

app.get('/api/v1/courses', (req, res) => {
    console.log("Request query param", req.query);
    return res.send(courses);
})

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

app.post('/api/v1/courses', (req, res) => {
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