/**
 * 123 => 321  -120 => -21
 * @param num
 * @returns {number}
 */
const numReverse = (num) => {
    let revNum = 0;

    while (num !== 0){
        const digit = num % 10;
        revNum = revNum * 10 + digit;
        num = ~~(num / 10); // 按位取反两次等价parseInt(num / 10)
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return revNum;
}

console.log(numReverse(123));
console.log(numReverse(-120));
