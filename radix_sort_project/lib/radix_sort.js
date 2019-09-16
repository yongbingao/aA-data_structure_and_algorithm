function radixSort(arr) {
    if(!Array.isArray(arr)) return null;
    const maxDigit = getMaxDigits(arr);
    let arrCopy = arr;
    let i = 0;

    while (i < maxDigit){
        const buckets = [...Array(10)].map(() => Array());

        arrCopy.forEach(ele => {
            buckets[getDigitFrom(ele, i)].push(ele);
        })

        arrCopy = buckets.reduce((acc, current) => acc.concat(current), []);
        i++;
    }

    return arrCopy;
}

function getDigitFrom(num, place){
    return Math.floor(Math.abs(num) / 10**place) % 10;
}

function getIntLength(num){
    return num === 0 ? 1 : Math.floor(Math.log(Math.abs(num))) + 1;
}

function getMaxDigits(nums){
    let maxDigit = 0;

    for(let i = 0; i < nums.length; i++){
        const numDigit = getIntLength(nums[i]);
        maxDigit = maxDigit < numDigit ? numDigit : maxDigit;
    }

    return maxDigit;
}

module.exports = {
    radixSort
};