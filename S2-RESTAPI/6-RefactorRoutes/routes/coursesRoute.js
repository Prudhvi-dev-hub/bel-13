const express = require('express');
const router = express.Router();

const {courses} = require('../models/coursesModel');
router.use(express.json());

router.get('/', (req, res) => {
    return res.send(courses);
});

router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");

    }
    res.send(course);
});


router.post('/', (req, res) => {
    const course = req.body;

    console.log("Body of the request", {course})   
    course.id = courses.length + 1;
    courses.push(course);
    res.send(course);
});

module.exports = router;
