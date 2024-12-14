function getLength(par) {
    if (typeof par === 'string')
        console.log(`string literal: ${par}; length: ${par.length}`);
    else
    if (par instanceof String)
        console.log(`String object: ${par}; length: ${par.length}`);
    else
    if (Array.isArray(par))
        console.log(`Array: ${par}; length: ${par.length}`);
    else
    if (par instanceof Map)
        console.log(`Map: ${par}; length: ${par.size}`);
    else
    if (par instanceof Set)
        console.log(`Set: ${par}; length: ${par.size}`);
    else
    if (typeof par[Symbol.iterator] === 'function') {
        let length = 0;
        for (const el of par) length++;
        console.log(`Iterable object: ${par}; length: ${length}`);
    }
    else
        console.log("Etc: " + (par.toString ? par : "-") + "; length: 0");
}

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
getLength(myIterObj1)
const myIterObj2 = new IterableObject("abcde")
getLength(myIterObj2)

getLength("string")
const strobj1 = new String("strobj1")
getLength(strobj1)
const strobj2 = new String("strobj2")
Object.setPrototypeOf(strobj2, null)
getLength(strobj2)
getLength(['a','r','r','a','y'])
getLength({name: "object"})
getLength(123)
getLength(new Set(['a','r','r','a','y']))
getLength(new Map([['one', 1],['two',2],['three',3]]))

let sym1 = Symbol("foo")
let sym2 = Symbol("boo")
let weakset1 = new WeakSet()
weakset1.add(sym1).add(sym2)
getLength(weakset1)

const wm1 = new WeakMap()
const o1 = {}
wm1.set(o1, 1)
getLength(wm1)

// if (weakset1[Symbol.ierator] === 'function') console.log("weakset is iterable")
// else console.log('weakset is not iterable')
// if (wm1[Symbol.ierator] === 'function') console.log("weakmap is iterable")
// else console.log('weakmap is not iterable')

