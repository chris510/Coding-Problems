function partition(array, pivot) {
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);
    return [ left, right ];
}

//quick sort selects the first element as the pivot

const quickSort = (array) => {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let leftSorted = quickSort(array.filter(el => el < pivot));
    let rightSorted = quickSort(array.filter(el => el >= pivot));

    return [...leftSorted, pivot, ...rightSorted];
}   




module.exports = {
    quickSort
};