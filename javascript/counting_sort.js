function countingSort(arr, max) {
    let result = [];
    let counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let j = 0; j < counters.length; j++) {
        while (counters[j] > 0) {
            result.push(j);
            counters[j]--;
        }
    }
    return result;
};

input1 = [4, 9, 0, 23, 15, 100, 66, 41, 5, 10]; // [0, 4, 5, 9, 10, 15, 23, 41, 66, 100]
input2 = [0, 4, 5, 9, 10, 15, 23, 41, 66, 100]; // [0, 4, 5, 9, 10, 15, 23, 41, 66, 100]
input3 = [100, 66, 41, 23, 15, 10, 9, 5, 4, 0]; // [0, 4, 5, 9, 10, 15, 23, 41, 66, 100]

console.log(countingSort(input1, 100));
console.log(countingSort(input2, 100));
console.log(countingSort(input3, 100));
