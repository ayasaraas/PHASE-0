function targetTerdekat(arr) {
  // you can only write your code here!
  var temp = 0
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      temp = Math.abs(i - arr.indexOf('o')) //indeks x - index o
      result.push(temp)
    }
  }
  //sorting
  var done = false;
  while (!done) {
    done = true;
    for (var i = 0; i < result.length-1; i++) {
      for (var j = 0; j < result.length-i-1; j++) {
      if (result[j] > result[j+1]) {
        done = false;
        var tmp = result[j];
        result[j] = result[j+1];
        result[j+1] = tmp;
      }
      }
    }
  }
  if (result.length === 0) {
    return 0
  }
return (result[0]);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
