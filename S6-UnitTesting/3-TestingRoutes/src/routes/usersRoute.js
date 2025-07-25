const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/usersController");

router.post("/register", async (req, res) => {
    const user = req.body;
    let dbUser;
    try {
        dbUser = await registerUser(user);
        res.status(201).send(dbUser);
    } catch(e) {
        res.status(500).send({"message": e.message});
    }
});

router.post("/login",  async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    return res.status(200).send({token: token});
});

module.exports = router;
