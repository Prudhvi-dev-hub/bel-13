const request = require("supertest");
const express = require("express");
const router = require("../../src/routes/usersRoute");
const { registerUser, loginUser } = require("../../src/controllers/usersController");

jest.mock("../../src/controllers/usersController");

const app = express();
app.use(express.json());
app.use(router);

describe('User Authentication Routes', () => {
    describe('POST /register', () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockResolvedValue(user);

            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(201);
            
            expect(response.body).toEqual(user);       //toBe does a shallow comparison, primitive comparison, To compare two deeply nested object use toEqual 
            expect(registerUser).toHaveBeenCalledWith(user);

        });

        it('should return an error if registration fails', async () => {
            const user = {
                name: "Jane Doe",
                email: "jane@example.com",
                password: "password123",
                role: "user"
            };

            // Mock the registerUser function to simulate an error
            registerUser.mockRejectedValue({message: "User registration failed"});

            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(500); // Assuming server error status code

            expect(response.body.message).toBe("User registration failed");
        });
    });

});
    
