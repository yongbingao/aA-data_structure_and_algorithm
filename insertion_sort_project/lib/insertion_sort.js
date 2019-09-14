function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        const currentVal = arr[i];
        let j = i - 1;
        for(j; j >= 0, currentVal < arr[j]; j--){
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}

module.exports = {
    insertionSort
};