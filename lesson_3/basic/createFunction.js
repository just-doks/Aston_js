// Создать функцию 
// Function Declaration
function makeCounter() {}
// Function Expression
let makeCounter1 = () => {}
makeCounter = function() {}
// Через функции высшего порядка
function makeMakeCounter() {
    return () => {}
}

makeCounter = makeMakeCounter()
console.log(typeof makeCounter === 'function') // true

// Через немедленно выполняемые функции высшего порядка
makeCounter = (() => {
    return function () {}
})()
console.log(typeof makeCounter === 'function') // true