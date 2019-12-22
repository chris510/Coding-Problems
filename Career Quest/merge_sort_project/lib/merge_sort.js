function merge(array1, array2) {
    let merged = [];

    while (array1.length && array2.length) {
        // switch (array1[0], array2[0]) {
        //     case -1:
        //         merged.push(array1.shift());
        //         break
        //     case 0:
        //         merged.push(array1.shift());
        //         break
        //     case 1:
        //         merged.push(array2.shift());
        //         break
        // }
        let ele1 = array1.length ? array1[0] : Infinity
        let ele2 = array2.length ? array2[0] : Infinity 

        if (ele1 < ele2) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }

    }
    return merged.concat(array1, array2)
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let sortedLeft = mergeSort(array.slice(0, mid));
    let sortedRight = mergeSort(array.slice(mid));

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};