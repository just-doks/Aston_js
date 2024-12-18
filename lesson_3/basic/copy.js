// Копирование объекта
let counter = {}

// Глубокое копирование
// 1. С помощью методов сторонних библиотек
const _ = require('lodash');
counter.a = 1;
counter.obj = {
    b: 1
}
let copied = _.cloneDeep(counter)
counter.obj.b = 3
console.log(copied.obj.b) // 1

// 2. С помощью методов JSON.stringify() и JSON.parse()
copied = JSON.parse(JSON.stringify(counter));
counter.obj.b = 2;
console.log("counter:")
console.log(counter) // { a: 1, obj: { b: 2 } }
console.log("copied:")
console.log(copied) // { a: 1, obj: { b: 3 } }

// 3. С помощью кастомной функции глубокого копирования
function deepCopy(obj) {
    if (obj !== Object(obj))
        return obj;
    let newObj = {};
    let queue = Array([obj, newObj]);
    while(queue.length) {
        const [obj, newObj] = queue.shift();
        //newObj = 
        Object.assign(newObj, Object.fromEntries(Object.entries(obj).map(
            ([key, value]) => {
                if (value !== Object(value))
                    return [key, value] 
                else {
                    const newObj = {};
                    queue.push([value, newObj]);
                    return [key, newObj];
                }
            }
        )))
    }
    return newObj;
}

copied = deepCopy(counter);
console.log("copied:")
console.log(copied)
counter.a = "str"
counter.obj.b = 999n;
console.log("counter")
console.log(counter)
console.log("copied:")
console.log(copied)

// 4. Реализация паттерна прототип для классов, экземпляры которых нужно копировать
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    clone() {
        return new Rectangle(this.width, this.height);
    }
    toString() {
        return `${this.width} ${this.height}`
    }
}
// Эквивалентно записи
function Rectangle1(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle1.prototype.clone = function() {
    return new Rectangle1(this.width, this.height)
}
Rectangle1.prototype.toString = function() {
    return `${this.width} ${this.height}`
}

const rect1 = new Rectangle(2, 3)
const rect2 = rect1.clone()
rect1.height = 1;
console.log("rect1: " + rect1)
console.log("rect2: " + rect2)

const rect3 = new Rectangle1(5, 6)
const rect4 = rect3.clone()
rect3.width = 4;
console.log("rect3: " + rect3)
console.log("rect4: " + rect4)

//5. Метод интерфейса Window structuredClone()
copied = {}
copied = structuredClone(counter) 
console.log(copied)
console.log(copied.obj === counter.obj) // false

// Поверхностное копирование
// 1. Object.assign()
let shallowCopy = {};
Object.assign(shallowCopy, counter)
shallowCopy = Object.assign({}, counter)
console.log(shallowCopy)
console.log(shallowCopy.obj === counter.obj) // true - потому что у объектов копируется ссылка
counter.rect = rect4;

// 2. Оператор Spread ...
shallowCopy = {...counter}
console.log(shallowCopy)
console.log(shallowCopy.rect === counter.rect) // true

// Ссылочное копирование
// 1. При помощи оператора =
const refCopy = counter
console.log(refCopy)
console.log(refCopy === counter) // true

