// Создание объекта
// 1. Используя литерал объекта
let counter = {}

// 2. При помощи функции-конструктора
function MakeCounter() {
}
counter = new MakeCounter();

// 3. При помощи конструкторов классов (ES6)
class Counter {
    constructor() {}
}
counter = new Counter()

// 4. С помощью конструктора класса Object
counter = Object()
// Можно с new или без (сущестует разница)
counter = new Object()
// Замечание - если передать аргументом объект - будет возвращена ссылка на него

// 5. При помощи встроенных методов класса Object
// Object.create(proto, propObj)
// proto: прототип объекта, propObj: объект с перечисляемыми свойствами - дескрипторами
counter = Object.create(Object.prototype, {});
// Object.assign(target, source1, source2, ...)
// Копирует все перечисляемые (enumerable) свойства источников (sources) в цель (target)
counter = Object.assign({}, {})
counter = Object.assign(counter, {})
Object.assign(counter, {})
// Object.fromEntries(iterable)
// iterable - итерабельный объект, элементами которого служат пары ключ-значение.
counter = Object.fromEntries([])
counter = Object.fromEntries(new Map())
counter = Object.fromEntries(new Set([['a', 1]]))
console.log(Object.hasOwn(counter, 'a')) // true
counter = Object.fromEntries(new Array())