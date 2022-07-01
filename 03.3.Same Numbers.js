function solve(num) {
let isSame = true;
let sum = 0 ;
let string = num.toString();
let check = string[0];
for(let i = 0; i < string.length; i ++) {
    sum += Number(string[i]);
    if(string[i] != check) {

    }
}
for(let i = 0; i < string.length; i ++) {
    
    if(string[i] != check) {
        isSame = false;
    }
}
console.log(isSame);
console.log(sum)
}
solve(2232222)