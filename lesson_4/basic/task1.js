
/* В JavaScript, все не примитивные (ссылочные) типы данных 
представлены типом 'object'.
Это значит, что любые типы данных, как
кастомные типы, созданные разработчиками,
так и стандартные - встроенные Map, Set, Date
и в том числе Array - являются расширениями типа Object. */
const array = Array('a', 'b', 'c')
console.log(array instanceof Array) // true
console.log(array instanceof Object) // true
console.log(typeof array) // object
/* Из этого вытекает, что статические методы типа Object
применимы к любым ссылочным типам данных. */
console.log(Object.keys(array)) // ['0', '1', '2']
/* Методы экземпляров Object также возможно вызывать
у экземпляров ссылочных типов. */
console.log(array.hasOwnProperty(1)) // true
/* Операторы доступа к свойствам объектов в том числе
применимы к экземплярам ссылочных типов данных. 
Тот факт, что массив является объектом, позволяет
совершать над ним операции, применимые к объектам,
что может привести к неожиданным и нежелательным результатам. */
array[5] = 'd'
console.log(array) // [ 'a', 'b', 'c', <2 empty items>, 'd' ]
console.log(array.length) // 6
array.pop()
console.log(array.length) // 5
array['a'] = 'e'
array.word = 'word'
console.log(array) // [ 'a', 'b', 'c', <2 empty items>, a: 'e', word: 'word' ]
console.log(array.length) // 5
// Цикл for..in также позволяет пройтись по перечисляемым свойствам
// массива, включая как индексы, так добавленные, именованные свойства.
for (let prop in array) {
    console.log(prop)
}
console.log()
// Однако, цикл for..of продолжит итерацию исключительно
// по индексированным элементам массива, обращаясь к методу
// [Symbol.iterator]()
for (let el of array) {
    console.log(el)
}
// Прототипом массива, соответственно, является объект
console.log(array.__proto__ instanceof Array) // false
console.log(array.__proto__ instanceof Object) // true
/*
Таким образом, можно утверждать, что массивы в JavaScript неправильные.

В JavaScript, согласно теории структур данных,
тип данных Object соответствует типу данных Хэш-Таблица.
Поэтому, можно считать, что массивы JavaScript совмещают себе, помимо 
непосредственно типа данных Массив, также и тип данных Хэш-таблица. 

Согласно той же теории, длина массива должна быть постоянной
и неизменяемой характеристикой. Чтобы расширить размер массива для добавления
новых элементов, нужно создать новый массив большего размера, 
скопировать элементы старого и добавить новые.
Однако, благодаря встроенным мутабельным методам push() и pop(),
в массив можно добавлять элементы, и извлекать их по принципу LIFO,
что позволяет с ним работать, как с типом данных Стек.

А за счёт мутабельного метода shift(), возвращающего первый элемент
в массиве, можно реализовать тип данных Очередь.

Поскольку с экземпляром Array можно работать, как с объектом,
ничто не мешает присвоить его свойствам ссылочные значения,
за счёт чего, можно организовать внутри него тип данных Дерево.

Экземпляры Array обладают методом [Symbol.iterator](), 
позволяющим перемещаться по его элементам как при помощи 
цикла for..of, так и напрямую, сохранив значение выполнения данного метода. 
А далее, вызывая у полученного значения метод next(), 
можно перемещаться вперёд по элементам массива, за счёт чего,
можно сказать, реализуется тип данных Связанный список,
в данном случае, односвязный (у каждого элемента есть указатель
лишь на следующий элемент). */
const iterator = array[Symbol.iterator]();
console.log(iterator.next().value) // 'a'
console.log(iterator.next().value) // 'b'
/*
Поскольку Граф может быть представлен, как в виде списка смежности -
который может быть выражен, как коллекция вершин,
так и в виде матрицы смежности - которая может быть выражена
через двумерный массив, можно считать, что экземпляр типа Array
способен реализовать тип данных Граф.
*/