const deepEqual = require('../deepEqual.js');

function func1() { console.log(); }

const func2 = () => { console.log("arrow_func")}

class OwnIterable {
    #data;
    constructor(val) {
        this.#data = val;
    }
    [Symbol.iterator]() {
        let iterator = this.#data[Symbol.iterator]();
        return {
            next: () => {
                return iterator.next();
            }
        }
    }
}
const ownIter = new OwnIterable(['a','b','c'])

const objA = {
    a: 1,
    b: "two",
    c: {
        d: 33n,
        e: {
            f: func1,
            g: true,
            o: ownIter
        },
        h: func2
    },
    g: null,
    h: undefined,
    o: ownIter
}

const objB = {
    a: 1,
    b: "two",
    c: {
        d: 33n,
        e: {
            f: func1,
            g: true,
            o: ownIter
        },
        h: func2
    },
    g: null,
    h: undefined,
    o: ownIter
}
console.log(deepEqual(objA, objB)) // true
Object.defineProperty(objA, 'b', {
    enumerable: false
})
console.log(deepEqual(objA, objB)) // false
Object.defineProperty(objB, 'b', {
    enumerable: false
})
console.log(deepEqual(objA, objB)) // true

console.log("1, 1 \t\t" + deepEqual(1, 1)) // true
console.log("1, 2 \t\t" + deepEqual(1, 2)) // false
console.log('1, "1" \t\t' + deepEqual(1, "1")) // false
console.log('"1", "1" \t' + deepEqual("1", "1")) // true
console.log("objA, objA.a \t" + deepEqual(objA, objA.a)) // false
console.log("1, objA.a \t" + deepEqual(1, objA.a)) // true
console.log('"1", objA.a \t' + deepEqual("1", objA.a)) // false
console.log('objA.c, objB.c \t' + deepEqual(objA.c, objB.c)) // true
console.log("func1, func1 \t" + deepEqual(func1, func1)) //true
console.log("null, null \t" + deepEqual(null, null)) //true
console.log("undefined, null \t" + deepEqual(undefined, null)) // false
console.log("undefined, undefined \t" + deepEqual(undefined, undefined)) // true