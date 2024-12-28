// Существует большое множество алгоритмов сортировки.

// Простые алгоритмы

// Самый известный и в то же время простой алгоритм - 
// Пузырьковая сортировка.
// Соседние элементы массива последовательно сравниваются 
// и меняются местами, если последующее значение меньше предыдущего.
// Временная сложность: худшее О(n^2), лучшее О(n)
// Пространственная сложность О(1)
// Алгоритм является наименее эффективным и не применяется на практике.
function bubbleSort(arr) {
    for (let i = 0; i + 1 < arr.length; ++i) {
        for (let j = 0; j + 1 < arr.lngth - i; ++j) {
            if (arr[j + 1] < arr[i]) {
                const tmp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = tmp;
}   }   }   }

// Шейкерная сортировка
// Реализация близка к пузырьковой, однако отличается тем, что
// сортировка происходит в двух направлениях - алгоритм перемещается 
// сначала слева направо, а затем в обратную сторону.
// Временная сложность: худшее О(n^2) лучшее О(n)
// Пространственная сложность: О(1)

// Сортировка расческой
// Усовершенствованная версия пузырьковой сортировки. 
// Алгоритм переносит наименьшие элементы из начала массива,
// что ускоряет сортировку.
// Вначале, пары для сравнения берутся с большим расстоянием 
// друг от друга. Постепенно, растояние между парами сокращается.
// Расстояние между сравниваемыми элементами выбирается не случайно,
// а с учетом специальной величины - 1.247
// Количество элементов в массиве делится на данное значение
// с каждым проходом, таким образом определяется расстояние между 
// сравниваемыми элементами.
// Временная сложность: худшее О(n^2) лучшее О(nlogn)
// Пространственная сложность: О(1)

// Сортировка вставками
// При сортировке вставками, массив постепенно перебирается слева направо.
// Каждый последующий элемент размещается так, чтобы он оказался
// между ближайшими элементами с минимальным и максимальным значением.
// Временная сложнсть: худшее О(n^2) лучшее О(n) для сравнений О(1) для перестановок
function insertionSort(arr) {
    for (let j = 1; j < arr.length; ++j) {
        let key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            --i;
        }
        arr[i + 1] = key;
    }
}

// Сортировка выбором
// Вначале, нужно найти минимальный (или максимальный) элемент.
// Затем, выбранное значение меняется местами со значением 
// первого неотсортированного элемента. Шаг повторяеся, пока не закончатся
// неотсортированные элементы.
// Временная сложность: О(n^2)
// Пространственная сложность: О(1)

// Эффективные сортировки

// Быстрая сортировка
// Алгоритм состоит из 3-х шагов:
// - выбирается опорный элемент
// - элементы массива перераспределяются так, чтобы элементы
//   меньше опорного располагались слева, а элементы больше ил равные - справа.
// - Предыдущие два шага применяются рекурсивно к распределённым подмасивам.
// Временная сложность: худшее О(n^2) среднее О(nlogn) лучшее О(n)
// Пространственная сложность: О(n)
// Существуют различные подходы в усовершенствовании данного алгоритма:
// - Наиболее эффективный из наименее затратных способов получения 
//   опорного элемента - выбрать его случайно.
// - При наличии большого количества повторяющихся элементов,
//   можно разделять массивы на три части, помещать повторяющиеся элементы
//   в центральную и возвращать индексы конца и начала крайних частей соотв.
// - Для массивов небольших размеров можно использовать более простой алгоритм,
//   вроде сортировки вставками.    
function quickSort(arr) {
    function _quickSort(arr, lo, hi) {
        if (lo < hi) {
            const pivot = arr[getRand(lo, hi)];
            const [low, high] = partition(arr, lo, hi, pivot);
            _quickSort(arr, lo, low);
            _quickSort(arr, high + 1, hi);
        }
    }
    // if (arr.length < 350) return insertionSort(arr);
    return _quickSort(arr, 0, arr.length);
}
function partition(arr, lo, hi, p) {
    let low = lo, mid = lo, high = hi;
    while (mid < high) {
        let el = arr[mid];
        if (el < p) {
            arr[mid] = arr[low];
            arr[low] = el;
            ++low;
            ++mid;
        } else
        if (el > p) {
            arr[mid] = arr[high - 1];
            arr[high - 1] = el;
            --high;
        } else
            ++mid;
    }
    return [low, high];
}
function getRand(min, max) {
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
}

// В ходе тестирования на скорость, оптимизированная версия быстрой сортировки
// справляется лучше сортировки вставкой при количестве элементов 
// от нескольких сотен единиц, как при большом числе повторяющихся элементов,
// так и при преимущественно уникальных значениях.
// Результат сильно варьируется от случайного значения опорного элемента.
// Экспериментально, было отмечено, что при количестве элементов больше 350
// преимущественно выигрывает по скорости быстрая сортировка (результат может
// отличаться в зависимости от входных данных и программно-аппаратного окружения).
let quickSortTime, insertionSortTime;
let array;
let elements = 10;
let step = 50;
let diversity;
do {
    array = [];
    diversity = elements;
    for (let i = 0; i < elements; ++i) {
        array.push(Math.floor(Math.random() * diversity))
    }
    let arrOfArr = [];
    for (let i = 0; i < 10; ++i) {
        arrOfArr.push(Array.from(array));
    }
    quickSortTime = 0;
    for (let i = 0; i < 10; ++i) {
        const start = performance.now();
        quickSort(arrOfArr[i]);
        const stop = performance.now();
        quickSortTime += stop - start;
    }
    quickSortTime = quickSortTime / 10;

    arrOfArr = [];
    for (let i = 0; i < 10; ++i) {
        arrOfArr.push(Array.from(array));
    }
    insertionSortTime = 0;
    for (let i = 0; i < 10; ++i) {
        const start = performance.now();
        insertionSort(arrOfArr[i]);
        const stop = performance.now();
        insertionSortTime += stop - start;
    }
    insertionSortTime = insertionSortTime / 10;
    elements += step;
} while(insertionSortTime < quickSortTime);
console.log("QuickSort avg time: ", quickSortTime, 'ms');
console.log("InsertionSort avg time: ", insertionSortTime, 'ms');
console.log("elements: ", elements - step);

// Сортировка слиянием
// Массив рекурсивно разбивается на два отдельных подмассива, 
// пока не будут получены отельные элементы. Затем, элементы 
// попарно сортируются и объединяются в отсортированные массивы.
// Цепочка рекурсивных вызовов раскручивается и возвращаемые массивы 
// попарно сортируются и объединяются, пока не будет получен
// конечный отсортированный массив.
// Временная сложность: О(nlogn)
// Пространственная сложность: О(n)

// Пирамидальная сортировка
// При этой сортировке сначала строится пирамида из элементов 
// исходного массива. 
// Пирамида (или двоичная куча) — это способ представления элементов, 
// при котором от каждого узла может отходить не больше двух ответвлений. 
// Значение в родительском узле должно быть больше значений
// в его двух дочерних узлах.
// Пирамидальная сортировка похожа на сортировку выбором, 
// где сначала ищется максимальный элемент, а затем помещается в конец. 
// Далее, операция рекурсивно повторяется для оставшихся элементов.
// Временная сложность: О(nlogn)
// Пространственная сложность: О(n)