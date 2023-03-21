function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 54321;
    });
}

const nums = [2, 4, 6, 8, 10]

console.log(mapSemThis(nums));
