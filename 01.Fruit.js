function solve(fruit, kg, price) {

    return `I need $${((kg / 1000) * price).toFixed(2)} to buy ${(kg / 1000).toFixed(2)} kilograms ${fruit}.`
}
console.log(solve('apple', 1563, 2.35))