function getLength(par) {
    if (typeof par === 'string' || par instanceof String || Array.isArray(par))
        console.log(par.length);
    else
    if (par instanceof Map || par instanceof Set)
        console.log(par.size);
    else
    if (typeof par?.[Symbol.iterator] === 'function') {
        let length = 0;
        for (const el of par) length++;
        console.log(length);
    }
    else
    if (typeof par === 'function')
        console.log(par.length)
    else
    if (typeof par === 'object' 
        && par !== null 
        && typeof par.length === 'number'
        && Number(par.length) >= 0) {
            console.log(Array.from(par).length);
        }
    else
        console.log(0);
}

module.exports = getLength;