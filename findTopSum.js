/**
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */
function findTopSum(arr, k, m) {
    /** 代码实现 */
    const sortArr = arr.sort((a, b) => b - a);
    let j = 0;
    let kCount = 0;
    let mCount = 0;
    const newArr = [];
    for(let i = 0; i < sortArr.length; i ++){
        let val = sortArr[i];
        const index = newArr.indexOf(val);
        if( index < 0){
            newArr.push(val);
            j ++;
        } else {
            val += newArr[index];
            newArr[index] = val;
        }

        if(j === k){
            kCount = val;
        }

        if(j === m){
            mCount = val;
        }

    }

    return kCount + mCount;
}

let arr = [1,2,4,4,3,5], k = 2, m = 4
console.log(findTopSum(arr, k, m));
