
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}



console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

/* 
  power(2, 4) #=> 16
    2 * power(2, 3) #=> 16 ->
        2 * power(2, 2) #=> 8 ->
          2 * power(2, 1) #=> 4 ->
              2 * power(2, 0) #=> 2 ->
                                #=> 1 ->
*/
