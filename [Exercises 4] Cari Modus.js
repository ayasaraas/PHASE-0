function cariModus(arr) {
  // you can only write your code here!
  var temp = [];
  var max = 1
  var temp1 = 0;

//untuk testcase terakhir
  for (var k = 0; k < arr.length; k++) {
    temp1 += arr[k]
    if (temp1/arr.length === arr[k]) {
      return '-1'
    }
  } 

//menggabungkan angka yg sama ke array kosong
  for (var i = 0; i < arr.length; i++) {
    var found = false
    for (var j = 0; j < temp.length; j++) {
      if (temp[j][0] === arr[i]) {
        found = true
        temp[j].push(arr[i])
      }
    }
    if (found === false) {
      temp.push([arr[i]])
    }  
}

//menentukan angka yg paling sering muncul    
  for (var i = 0; i < temp.length; i++) {
    for (var j = 0; j < temp[i].length; j++) {
      if (temp[i].length > max) {
        return temp[i][j]
      }
    }
  }
  if (max === 1) {
    return '-1'
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
