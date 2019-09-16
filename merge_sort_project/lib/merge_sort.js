function merge(array1, array2) {
    let result =[];

    while(array1.length && array2.length){
        if (array1[0] > array2[0]) result.push(array2.shift());
        else result.push(array1.shift());
    }

    if (array1.length) result = result.concat(array1);
    if (array2.length) result = result.concat(array2);

    return result;
}

function mergeSort(array) {
    if (array.length < 2) return array;

    const len = array.length - 1;
    const mid = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};