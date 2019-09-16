function countingSort(arr, max) {
    const counterArr = new Array(max + 1,).fill(0);
    const result = [];

    arr.forEach(ele => counterArr[ele]++);
    counterArr.forEach((ele, idx) => {
        for(let i = 0; i < ele; i++){
            result.push(idx);
        }
    })

    return result;
}


module.exports = {
    countingSort
};