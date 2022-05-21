/**
 * 判断是否是基本数据类型
 * @param value
 */
function isPrimitive(value){
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean')
}

/**
 * 判断是否是一个js对象
 * @param value
 */
function isObject(value){
    return Object.prototype.toString.call(value) === "[object Object]"
}

/**
 * 深拷贝一个值
 * @param value
 */
function cloneDeep(value){

    // 记录被拷贝的值，避免循环引用的出现
    let memo = {};

    function baseClone(value){
        let res;
        // 如果是基本数据类型，则直接返回
        if(isPrimitive(value)){
            return value;
            // 如果是引用数据类型，浅拷贝一个新值来代替原来的值
        }else if(Array.isArray(value)){
            res = [...value];
        }else if(isObject(value)){
            res = {...value};
        }

        // 检测我们浅拷贝的这个对象的属性值有没有是引用数据类型。如果是，则递归拷贝
        Reflect.ownKeys(res).forEach(key=>{
            if(typeof res[key] === "object" && res[key]!== null){
                // 此处用memo来记录已经被拷贝过的引用地址。以此来解决循环引用的问题
                if(memo[res[key]]){
                    res[key] = memo[res[key]];
                }else{
                    memo[res[key]] = res[key];
                    res[key] = baseClone(res[key])
                }
            }
        })
        return res;
    }

    return baseClone(value)
}

const obj = {};
const b = {obj};
obj.b = b
const copy = cloneDeep(obj);
console.log(copy);

// 生产环境建议使用：https://github.com/lodash/lodash/blob/master/cloneDeep.js
