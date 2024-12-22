const obj = {
    item: 'some value'
}

function logger() {
    console.log(`I output only external context: ${this.item}`);
    if (arguments.length)
        console.log('And maybe some arguments:', ...arguments)
    console.log()
  }

logger.call(obj)
logger.call(obj, 3, true)
logger.apply(obj)
logger.apply(obj, ['a', 'b'])

const boundLogger1 = logger.bind(obj)
boundLogger1()
const boundLogger2 = logger.bind(obj, 1, 2)
boundLogger2()