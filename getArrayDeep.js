/**
 * 获取嵌套数组深度
 * 说明：给定一个带嵌套的数组，实现一个方法可获取嵌套数组的最大深度，
 *   数组无嵌套子数组，则返回0，有一层嵌套子数组则1，依此类推。
 * 示例：
 *   getArrayDeep([1, 2, [3, [1, [0]]]]); // 返回 3
 *   getArrayDeep([]); // 返回 0
 *   getArrayDeep([[[[]]]]); // 返回 3
 *   getArrayDeep([0, [2], [2, [3]]]); // 返回 2
 */

function getArrayDeep(arr) {
    /** 代码实现 */
    const obj = JSON.stringify(arr);
    let max = 0;
    let cur = 0;
    for(let key in obj){
        if(obj[key] === '['){
            cur ++;
        }

        if(obj[key] === ']'){
            cur --;
        }

        if(max < cur){
            max = cur;
        }
    }

    return max - 1;
}

console.assert(getArrayDeep([1, 2, [3, [1, [0]]]]) === 3);
console.assert(getArrayDeep([]) === 0);
console.assert(getArrayDeep([[[[]]]]) === 3);
console.assert(getArrayDeep([0, [2], [2, [3]]]) === 2);
