const deepEqual = (obj1, obj2) => {
    if (obj1 !== Object(obj1)) {
        if (obj2 !== Object(obj2))
            return ((obj1 === obj2) ? true : false);
        else 
            return false;
    }
    if (obj2 !== Object(obj2))
        return false;
    if (typeof obj1 === 'function' 
        || typeof obj2 === 'function'
    ) {
        return obj1 === obj2 ? true : false;
    }
    let queue = Array([obj1, obj2]);
    while (queue.length) {
        const [obj1, obj2] = queue.shift();
        /**Map of Object 1 all property descriptors entries */
        const obj1Map = new Map(Object.entries(
            Object.getOwnPropertyDescriptors(obj1)));
        /**Map of Object 2 all property descriptors entries */
        const obj2Map = new Map(Object.entries(
            Object.getOwnPropertyDescriptors(obj2)));
        if (obj1Map.size !== obj2Map.size) 
            return false;

        for (const [key, val] of obj1Map) {
            if (!obj2Map.has(key)) 
                return false;
            const obj2val = obj2Map.get(key);
            if (val.enumerable !== obj2val.enumerable) 
                return false;
            
            if (val.value === Object(val.value)
                && obj2val.value === Object(obj2val.value)) {
                    if (!(typeof val.value === 'function'
                        || typeof obj2val.value === 'function'))
                        queue.push([val.value, obj2val.value])
                    else
                    if (val.value !== obj2val.value)
                        return false;
            } else
            if (val.value !== obj2val.value)
                return false;
        }
    }
    return true;
};

module.exports = deepEqual;