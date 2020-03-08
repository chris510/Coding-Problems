function binarySearch(array, target) {
    if (array.length === 0) return false;

    let mid = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid + 1);

    if (target < array[mid]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[mid]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};