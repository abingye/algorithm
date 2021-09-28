/**
 * 输入一个字符串，其中包含 [](){} 六种括号，请你判断这个字符串组成的括号是否合法。
 * Input: "()[]{}" Output: true
 * Input: "([)]"  Output: false
 * Input: "{[]}"  Output: true
 */
const a = "{[()]}";
const b = "(){[]}";
const c = "({)[]}";
const d = "()[]}";
function isValid(s){
  if(s % 2 === 1){
    return false;
  }
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const arr = [];
  for(let i = 0; i < s.length; i ++){
    const val = s[i];
    if(map.has(val)) {
      if(!arr.length || arr[arr.length - 1] !== map.get(val)){
        return false;
      }
      arr.pop();
    } else {
      arr.push(val);
    }
  }
  return !arr.length;
}

console.log(isValid(a), isValid(b), isValid(c), isValid(d));
