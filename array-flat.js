let arr = [1,3,[5, 6], 7];

function flat(inputArr) {
    let newArr = [];

    for(i = 0; i < inputArr.length; ++i) {
        if(inputArr[i].length) {
            for(let j = 0; j < inputArr[i].length; ++j) {
                newArr.push(inputArr[i][j]);
            }
        } else {
            newArr.push(inputArr[i]);
        }
    }
    return newArr;
}

console.log(flat(arr));