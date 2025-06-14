const express = require("express");
// Designing the course rating app
// - Get all courses: GET /api/v1/courses
// - Get one course: GET /api/v1/courses/:courseId

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

// app.get('/api/v1/courses/1', (req, res) => {
//     return res.send(courses[1]);
// })

// app.get('/api/v1/courses/2', (req, res) => {
//     return res.send(courses[2]);
// })

app.get('/', (req, res) => {
    res.send("Hello World");     
})


app.listen(3000, () => {
    console.log("Server started successfully");
})