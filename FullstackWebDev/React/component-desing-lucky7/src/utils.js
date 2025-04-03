
function d6() {
    return Math.floor(Math.random() * 6) + 1
}

function getRolls(n) {
    return Array.from({length: n}, () => d6());
}

function sum(arr) {
    let result = 0;
    for (let i of arr) {
        result += i;
    }
    return result;
}

export {d6, getRolls, sum};