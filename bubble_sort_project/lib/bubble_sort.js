function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    return array;
}

function bubbleSort(array) {
    let swapped = true;

    while (swapped){
        swapped = false;
        for(let i = 1; i < array.length; i++){
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
                swapped = true;
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};