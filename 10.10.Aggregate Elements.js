function solve(arr) {
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum);
let secondRersult = 0; 
arr.forEach(x => secondRersult += 1 / x);
console.log(secondRersult);
console.log(arr.join(``));





}
solve([1, 2, 3])