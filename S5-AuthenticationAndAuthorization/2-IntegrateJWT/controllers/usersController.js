const bcrypt = require('bcrypt');
const rounds = 5;
const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');


const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, rounds);
    return await usersModel.create(user);
}

const loginUser = async (email, password) => {

    const body = {
        email:email
    }

    const dbUser = await usersModel.findOne(body);

    // check if the user exists
    if (!dbUser) throw new Error("User not found");


    // check if the password is same
    const isSamePassword = await bcrypt.compare(password, dbUser.password);
    console.log(isSamePassword);
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const token = jwt.sign({username: dbUser.email, role: dbUser.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
    console.log(token);
    // send a response
    return {status: 'ok', token: token};
}



module.exports = {registerUser, loginUser};