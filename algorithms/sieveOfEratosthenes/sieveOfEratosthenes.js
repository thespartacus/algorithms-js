function sieveOfEratosthenes(num) {
  var numRoot = Math.floor(Math.sqrt(num));
  var array = Array(num).fill(true);
  var result = [];

  array[0] = false;
  array[1] = false;

  for(var i = 2; i <= numRoot; i++) {
    if (array[i] === true) {
      for(var j = i; j <= num; j = j + i) {
        if (j > i) {
          array[j] = false;
        }
      }
    }
  }

  for (var k = 0; k <= num; k++) {
    if(array[k] === true) {
      result.push(k);
    }
  }

  console.log(result);
  return result;
}

export default sieveOfEratosthenes;


//Another way
// function sieveOfEratosthenes(n) {
//   var primes = [];
//   for (var i = 0; i <= n; i++) {
//     primes[i] = true;
//   }
  
//   primes[0] = false;
//   primes[1] = false;
  
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     for (j = 2; i * j <= n; j++) {
//       primes[i * j] = false;
//     }
//   }
  
//   var result = [];
//   for (var i = 0; i < primes.length; i++) {
//     if (primes[i]) result.push(i);
//   }
  
//   return result;
// }
