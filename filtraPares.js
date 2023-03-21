function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 32, 56, 76, 33, 95]

console.log(filtraPares(meuArray));
