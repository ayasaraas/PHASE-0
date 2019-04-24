function mengelompokkanAngka(arr) {
  var baris1 = [];
  var baris2 = [];
  var baris3 = [];
  var output = [];

for (var i = 0; i<arr.length; i++) {//untuk membaca isi array dan memilih kondisi
 if (arr[i] % 3 === 0) { //kelipatan 3
    baris3.push(arr[i])
  }
  else if (arr[i] % 2 === 0) { //bilangan genap
    baris1.push(arr[i])
  }
  else if (arr[i] % 2 === 1) { //bilangan ganjil
    baris2.push(arr[i])
  }
}
output.push(baris1, baris2, baris3)
return output;
}


// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
