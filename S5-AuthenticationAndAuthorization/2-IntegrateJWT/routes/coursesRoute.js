const express = require('express');
const router = express.Router();
const  {getAllCourses, createCourse, getCourseById} = require('../controllers/coursesController');
const jwt = require('jsonwebtoken');

router.use(express.json());


const authorizationMiddleware = (req, res, next) => {
    const headers = req.headers || {};
    const token = headers.authorization;

    if (!token) {
        return res.status(400).send({"message": "Token not found"});
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
        return res.status(401).send({message: "Invalid Token"});
    }

    req.user = decodedToken;
    next();
}
router.get('/', getAllCourses);
router.get("/:id", getCourseById);
router.post('/', [authorizationMiddleware], createCourse);

module.exports = router;
