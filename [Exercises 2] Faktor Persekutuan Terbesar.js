function fpb(angka1, angka2) {
  // you can only write your code here!
  var arr1 = []
  var arr2 = []

//menampung faktor pembagi dari angka1
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) { 
      arr1.push(i)
    }
  }
  //menampung faktor pembagi dari angka2
  for (var i = 1; i <= angka2; i++) {
    if (angka2 % i === 0) {
      arr2.push(i)
    }
  }

  var temp = 0
  //mencari angka yg sama dari kedua faktornya
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        temp = arr2[j]
      }
    }
  }
  return temp
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
