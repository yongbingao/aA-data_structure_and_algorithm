function binarySearch(array, target) {
    if (array.length === 0) return false;

    const mid = Math.floor(array.length / 2);

    if (target === array[mid]) return true;

    if (target > array[mid]){
        const right = array.slice(mid + 1);
        return binarySearch(right, target);
    } else {
        const left = array.slice(0, mid);
        return binarySearch(left, target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    const mid = Math.floor(array.length / 2);

    if (target === array[mid]) return mid;

    if (target > array[mid]) {
        const right = array.slice(mid + 1);
        const result = binarySearchIndex(right, target);
        return result === -1 ? -1 : mid + 1 + result;
    } else {
        const left = array.slice(0, mid);
        return binarySearchIndex(left, target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};