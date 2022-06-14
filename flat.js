const arr1 = [0, 1, 2, [[[3, 4]]]];

function flat(arr){
    return arr.reduce((pre,val) => {
        if(Array.isArray(val)){
            return pre.concat(flat(val));
        }
        return pre.concat(val)
    }, [])
}

console.log(flat(arr1)); // [ 0, 1, 2, 3, 4 ]
