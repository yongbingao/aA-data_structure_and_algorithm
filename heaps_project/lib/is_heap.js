// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    let result = true;
    
    for(let i = array.length - 1; i > 1; i--){
        if (array[i] > array[Math.floor(i/2)]) result = false;
        if (result === false) return result;
    } 

    return result;
}


module.exports = {
    isMaxHeap
};