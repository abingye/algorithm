/**
 * 函数柯里化高级实现
 * @param func
 * @returns {(function(...[*]=): (*))|*}
 */

function curry(func) {
  return function curried(...args) {
    // 当我们运行它时，这里有两个 if 执行分支：
    // 1.现在调用：如果传入的 args 长度与原始函数所定义的（func.length）相同或者更长，那么只需要将调用传递给它即可。
    // 2.获取一个偏函数：否则，func 还没有被调用。取而代之的是，返回另一个包装器 pass，它将重新应用 curried，将之前
    // 传入的参数与新的参数一起传入。然后，在一个新的调用中，再次，我们将获得一个新的偏函数（如果参数不足的话），或者最终的结果。
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
console.log( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
console.log( curriedSum(1)(2)(3) ); // 6，全柯里化
