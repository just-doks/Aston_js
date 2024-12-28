class SuperPerson {
    #name;
    constructor(name) {
        this.#name = name;
    }
    set name(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
}

const superPerson = new SuperPerson()
superPerson.name = "Bob";
console.log(superPerson.name)

class ExtendedSuperPerson extends SuperPerson {
    constructor(name) {
        super(name)
    }
}
const extendedSuperPerson = new ExtendedSuperPerson()
extendedSuperPerson.name = "Jake";
console.log(extendedSuperPerson.name)