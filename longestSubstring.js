/**
 * 思路：遍历字符串并存入set集合中，如果有重复字符就终止当前循环，记录最大字符数并执行下一次，
 * 每次执行需要将指针右移一个，故需删除set第一个字符
 * @param s
 * @returns {number}
 */
const lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const len = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, max = 0;
    for (let i = 0; i < len; ++i) {
        if (i !== 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        max = Math.max(max, rk - i + 1);
    }
    return max;
};
console.log(lengthOfLongestSubstring('aaab')); // 2

