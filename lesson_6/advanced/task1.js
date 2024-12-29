
async function func(arr) {
    for (let i = 0; i < arr.length; ++i) {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(arr[i]), 3000);
        })
        console.log(await promise);
    }
}
func([1, 2, 3]);
console.log('non-blocking');