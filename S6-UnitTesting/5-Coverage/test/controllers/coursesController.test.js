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
        expect(coursesModel.find).toHaveBeenCalledTimes(1);
    });

    // Add more tests

   
})
 // GetACourse
    // 1. Valid Id
    // 2. Invalid Id
    // 3. An id where course is not found
    // 4. 

describe("Test getting a single course", () => {
    it("Should return a course if found", () => {       // Can use it and test interchangebly
        const mockCourse = {_id:1, name: "Course 1"};

        coursesModel.findById = jest.fn().mockImplementation((id) => {
            return id === 1 ? mockCourse: null;
        });

        const result = coursesController.getACourse(2);

        expect(result).toBe(null);
        expect(coursesModel.findById).toHaveBeenCalledWith(2);
    })

    it("Should throw an error if query fails", () => {
        coursesModel.findById = jest.fn().mockImplementation((id) => {
            throw new Error("DB Error");
        });        
        
        expect(() => coursesController.getACourse(123).toThrow()); 
    });

    // Additional test cases
})


describe("Test creating a course", () => {
    test("Should create and return a new course", () => {
        const mockCourse = {name: "New Course"};
        const savedCourse = {_id: 3, ...mockCourse};

        coursesModel.create.mockReturnValue(savedCourse);

        const result = coursesController.createACourse(mockCourse);
        expect(result).toBe(savedCourse);
    })
})



