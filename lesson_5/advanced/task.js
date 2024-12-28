function firstSum(arr, total) {
    if (arr.length >= 2) {
        let i = 0, j = 1;
        while (i < arr.length - 1) {
            if (arr[i] + arr[j] === total) 
                return [arr[i], arr[j]];
            if (j === arr.length - 1) {
                ++i; 
                j = i + 1; 
            } else
                ++j;
        }
    }
    return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firstSum(arr, 13))
console.log(firstSum(arr, 18))

// Сложность разработанного алгоритма выражается через 
// формулу нахождения количества уникальных пар массива:
// (n - 1) * n / 2
// Поскольку, в худшем случае, количество итераций цикла
// будет равно общему числу возможных пар.
// Согласно нотации Big O, сложность определяется
// по наиболее возрастающему слогаемому, а константные коэффициенты
// отбрасываются. 
// Таким образом, сложность данного алгоритма будет составлять:
// О(n^2)