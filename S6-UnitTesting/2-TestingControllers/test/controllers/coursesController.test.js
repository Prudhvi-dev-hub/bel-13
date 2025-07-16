const { exec } = require('child_process');
const coursesController = require('../../src/controllers/coursesController');
const coursesModel = require('../../src/models/coursesModel');

jest.mock('../../src/models/coursesModel');     // It would mock the model;

describe("Test courses Controller", () => {

    // GetAllCourses
    // Should return array of courses
    // Empty array

    test("Should return an array of courses", () => {
        const mockCourses = [{
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
        }];
        // mockResolvedValue ==> if the function mocked is async
        coursesModel.find.mockReturnValue(mockCourses);

        const result = coursesController.getAllCourse();

        expect(result).toBe(mockCourses);
        

    })



})

