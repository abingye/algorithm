/**
 * 动态规划解法，时间复杂度O(n),空间复杂度O(1)
 * @param n
 * @returns {number|*}
 */
function fib(n){
    if(n < 2) return n;
    let a = 0, b = 1, sum = 0;
    for(let i = 2; i <= n; i ++){
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}

console.log(fib(7));

/**
 * 递归，时间复杂度O(n),空间复杂度O(n)
 * @param n
 * @returns {*}
 */
function fib2(n){
    if(n < 2) return n;
    return fib2(n - 1) + fib2(n - 2)
}

console.log(fib2(7));
