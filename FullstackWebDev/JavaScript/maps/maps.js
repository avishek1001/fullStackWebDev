const nums = [1,2,3,4,5,6,7,8,9,10];

const doubles = nums.map(function (n) {
    return 2 * n;
})

function doub(arr) {
    let x = arr;
    for (let i of x){
        i *= 2;
    }

    return x;
}