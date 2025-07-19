const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    
    
    return courses.find();
}

const getACourse =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse =   (course) => {
    // const dbCourse = {...course};
    // dbCourse.id = courses.length;
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};