function solve(num) {
    let result = [];

    for(let i = 0; i < num;i++) {
        let print = ``;
        for(let j = 0; j < num; j ++) {
            
            print += `*`
           
            
        }
        result.push(print);
    }
   result.forEach(x => console.log(x.split(``).join(` `)));
    
}
solve(5)
