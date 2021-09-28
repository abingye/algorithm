/**
 * 按条件合并相邻项
 * 说明：实现一个方法，可将数组中相邻的项按条件合并
 * 示例：
 *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]
 */
function addJoin(arr, condition) {
    /* 代码实现 */
    let newArr = [];
    let curArr = [];
    for(let i = 0; i < arr.length; i++){
        const val = arr[i];
        if(!condition(val)){
            if(curArr.length){
                newArr.push(curArr);
                curArr = [];
            }
            newArr.push(val);
        } else {
            curArr.push(val);
        }
        if(i === arr.length - 1){
            if(curArr.length){
                newArr.push(curArr);
                curArr = [];
            }
        }
    }
    return newArr;
}

console.log(addJoin([1, 2, 3, 4, 5], item => item !== 3))
console.log(addJoin([1, 2, 3, 4], item => item < 3))
