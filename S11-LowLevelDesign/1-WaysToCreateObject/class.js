// Object Literels: 
// Simplest way to create an object
// const car  = {
//     make: "Toyota", 
//     model: "Camary",
//     year: "2025",
//     start: function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }
// }

// Problems:
// Violating DRY principle, Lot of code duplication
// Extensiblity? None
// car.start();



//2.  Via using Constructor Function

// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     this.start = function() {
//         // Depends on internal methods
//         // Inject fuel
//         // ignite spark plug
//         // rotate the rotor of engine


//         console.log(`${this.make} ${this.model} is starting`)
//     }

//     // this.injectFuel
//     // this.igniteSparkPlug
//     // this.rotateRotor
// }


// const alto = new Car("Maruti", "Alto", 1990, 'white');

// alto.start();


/* Problems:
    Less extensible
    No Constructor / Deconstructor 
    No way to override methods
    No way to encapsulate methods and attributes
*/


class Car {
    #color;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#color = "White"
    }
    
    start(){
        this.#injectFuel()
        this.#igniteSparkplug();
        console.log(`${this.make} ${this.model} is starting`)
    }

    #injectFuel() {
        console.log(`Adding drops of fuel in engine`)
    }

    #igniteSparkplug() {
        console.log(`Adding fire to fuel`)
    }
}

const alto = new Car("Maruti", "Alto", 1990);

alto.start();
alto.#injectFuel()
alto.#color;


class ElecticCar extends Car {

    

}



