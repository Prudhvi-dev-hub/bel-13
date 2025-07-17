const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const saltRounds = 10;
// const JWT_SECRET = process.env.JWT_SECRET
const usersModel = require("../../src/models/usersModel");
const mongoose = require('mongoose');


const {MongoMemoryServer} = require('mongodb-memory-server');

const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer;

// Setup phase
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
})
// Teardown phase
afterAll(async () =>  {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
})

describe("User Authentication Tests", () => {
    describe("Tests for Register User", () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            // const plainTextPassword = user.password;
            
            const dbUser = await registerUser(user);

            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            console.log(user.password);
            // console.log(bcrypt.compareSync(user.password, dbUser.password));
            expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true); 
        });
    })
})






