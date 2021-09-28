/**
 * 数组翻转
 * @type {number[]}
 */

const arr = [1,2,3,4,5];

function reverse(arr){
    const length = arr.length;
    let len = Math.floor(length / 2);
    for(let i = 0; i < len; i ++){
        let temp = arr[i];
        const lastLen = length - i - 1;
        arr[i] = arr[lastLen];
        arr[lastLen] = temp;
    }
    return arr;
}

console.log(reverse(arr));
