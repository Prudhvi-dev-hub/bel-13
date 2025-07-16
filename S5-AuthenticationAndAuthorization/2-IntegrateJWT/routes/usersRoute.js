const express = require('express');
const router = express.Router();
const  {registerUser, loginUser} = require('../controllers/usersController');

router.use(express.json());

// router.get('/', getAllCourses);
// router.get("/:id", getCourseById);
router.post('/', async (req, res) => {
    const user = req.body;
    const dbUser = await registerUser(user);

    console.log(dbUser);
    return res.send(dbUser);
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const resp = await loginUser(email, password);
    return res.send(resp);
})





module.exports = router;
