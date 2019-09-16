function quickSort(array) {
    if (array.length < 2) return array;

    const pivot = array.pop();
    const left = array.filter(ele => ele < pivot);
    const right = array.filter(ele => ele >= pivot);

    return [].concat(quickSort(left), pivot, quickSort(right));
}


module.exports = {
    quickSort
};