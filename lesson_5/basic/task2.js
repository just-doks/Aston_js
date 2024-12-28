
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {console.log("Hello, I'm", this.name)}
    getAge = getAge;
}
const person1 = new Person1("First", 25)
person1.greeting()
person1.getAge()
const person1a = new Person1("First-a", 15)
console.log(person1.greeting === person1a.greeting) // true

function Person2(name, age) {
    this.name = name;
    this.age = age;
}
Person2.prototype.greeting = function() {
    console.log("Hello, I'm", this.name)
}
Person2.prototype.getAge = getAge;
const person2 = new Person2("Second", 24);
person2.greeting()
person2.getAge()
const person2a = new Person2("Second-a", 14)
console.log(person2.greeting === person2a.greeting) // true
console.log(person1.greeting === person2.greeting) // false

function Person3(name, age) {
    return {
        name,
        age,
        greeting() {console.log("Hello, I'm", this.name)},
        getAge: getAge
    }
}
const person3 = Person3("Third", 26)
person3.greeting()
person3.getAge()
const person3a = Person3("Third-a", 16)
console.log(person3.greeting === person3a.greeting) // false !!!

function getAge() {
    console.log("I'm", this.age, "years old");
}
console.log(person1.getAge === person2.getAge && person2.getAge === person3.getAge) // true

class AnotherPerson1 extends Person1 {
    constructor(name, age) {
        super(name, age)
    }
}
const anotherPerson1 = new AnotherPerson1("Another1", 20)
anotherPerson1.greeting()
anotherPerson1.getAge()

Person1.prototype.logInfo = logInfo;
person1.logInfo()
anotherPerson1.logInfo()

function AnotherPerson2(name, age) {
    Person2.call(this, name, age)
}
const anotherPerson2 = new AnotherPerson1("Another2", 21)
anotherPerson2.greeting()
anotherPerson2.getAge()
Person2.prototype.logInfo = logInfo;
person2.logInfo()
anotherPerson2.logInfo()

function AnotherPerson3a(name, age) {
    const result = {}; //new properties
    return Object.create(Person3(name, age), result);
}
// or
function AnotherPerson3b(name, age) {
    const result = {}; //new properties
    return Object.assign(result, Person3(name, age));
}
const anotherPerson3 = AnotherPerson3b("Another3", 22);
person3.logInfo = logInfo;
anotherPerson3.logInfo = logInfo;
person3.logInfo();
anotherPerson3.logInfo();

function logInfo() {
    console.log("name:", this.name, "\nage:", this.age)
}
