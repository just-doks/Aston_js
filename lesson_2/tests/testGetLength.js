const getLength = require('../getLength.js');

getLength("string") // 6
const strobj1 = new String("strobj1")
getLength(strobj1) // 7
const strobj2 = new String("strobj2")
Object.setPrototypeOf(strobj2, null)
getLength(strobj2) // 0
getLength(['a','r','r','a','y']) // 5
getLength({name: "object"}) // 0
getLength(123) // 0
getLength(new Set(['a','r','r','a','y'])) // 3
getLength(new Map([['one', 1],['two',2],['three',3]])) // 3

let sym1 = Symbol("foo")
let sym2 = Symbol("boo")
let weakset1 = new WeakSet()
weakset1.add(sym1).add(sym2)
getLength(weakset1) // 0

const wm1 = new WeakMap()
const o1 = {}
wm1.set(o1, 1)
getLength(wm1) // 0

class IterableObject {
    #data;
    constructor(param) {
        this.#data = param
    }
    [Symbol.iterator]() {
        let iterator = this.#data[Symbol.iterator]();
        return {
            next: () => {
                return iterator.next();
            },
            return() {
                return {done: true};
            }
        }
    }
    toString() {
        return "[object IterableObject]";
    }
}

const myIterObj1 = new IterableObject(['a','b','c'])
getLength(myIterObj1) // 3
const myIterObj2 = new IterableObject("abcde")
getLength(myIterObj2) // 5

getLength(null) // 0
getLength(undefined) // 0
function func() {
    var length = 2;
    console.log(length)
}
getLength(func) // 0
const arrowFunc = () => {
    var length = 1;
    console.log(length);
}
getLength(arrowFunc); // 0

const pseudoArr = {0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4};
const wrongPseudoArr = {'g': -1, 1: 'b', 2: 'c', 3: 'd', 'e': 4, 'f': 5, length: 3};
Object.defineProperty(wrongPseudoArr, 'length', {
    enumerable: false
})
console.log(Array.prototype.slice.call(pseudoArr));
console.log(Array.prototype.slice.call(wrongPseudoArr));
console.log(Array.from(wrongPseudoArr)); 
getLength(pseudoArr) // 4
getLength(wrongPseudoArr) // 3