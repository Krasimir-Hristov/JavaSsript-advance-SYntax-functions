function solve(n1, n2, operator) {
 let result = 0
    switch(operator) {
        case '+': result = n1 + n2;
        break;
        case '-': result = n1 - n2;
        break;
        case `*`: result = n1 * n2;
        break;
        case `/`: result = n1 / n2;
        break;
        case `%`: result = n1 % n2;
        break;
        case `**`: result = n1 ** n2;
        break;
    }
    return result
}
console.log(solve(3, 5.5, '*'))
