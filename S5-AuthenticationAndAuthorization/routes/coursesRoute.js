const express = require('express');
const router = express.Router();
const  {getAllCourses, createCourse, getCourseById} = require('../1-IntegrateMongoose/controllers/coursesController');

router.use(express.json());

router.get('/', getAllCourses);
router.get("/:id", getCourseById);
router.post('/', createCourse);

module.exports = router;
