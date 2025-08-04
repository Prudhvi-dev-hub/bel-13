class Animal {
    #name;

    constructor(name, sound) {
        this.#name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.#name} says ${this.sound}`);
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log("Invalid Name");
        }
    }

    cry() {
        console.log("This Mammal is crying");
    }

}

class Mammal extends Animal {
    constructor(name, sound, type) {
        // Animal.call(name, sound);
        super(name, sound);
        this.type = type;
    }

    breathe() {
        console.log(`${this.getName()} is breating`);
    }

    speak() {
        super.speak();
        console.log('Mammal Speaks with sound: ' + this.sound);      
        
    }
}

let elephant = new Mammal("White Elephant", "Speaks", "domestic");

elephant.speak();


// class Cat extends Mammal {
//     ...
// }




