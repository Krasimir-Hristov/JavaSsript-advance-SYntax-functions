function solve(num,...commands) {
  num = Number(num)
 
 for(let command of commands) {
     if(command === `chop`) {
         num /= 2;
     } else if (command === `dice`) {
      num =  Math.sqrt(num * num);
     } else if (command === `spice`) {
         num += 1;
     } else if (command === ` bake`) {
         num *= 3;
     } else if (command === `fillet`) {
         num *= 0.80;
     }
     console.log(num)
 }



}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')