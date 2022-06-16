/**
 * 题目见：https://leetcode.cn/problems/k-diff-pairs-in-an-array/
 * 输入：nums = [3, 1, 4, 1, 5], k = 2
 * 输出：2
 * 解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
 * 尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function(nums, k) {
    const m = new Set();
    const n = new Set();
    for(const num of nums){
        if(m.has(num - k)){
            n.add(num - k);
        }
        if(m.has(num + k)){
            n.add(num);
        }
        m.add(num);
    }
    return n.size;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1,3,1,5,4],0));   // 1
