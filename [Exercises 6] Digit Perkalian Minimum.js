function digitPerkalianMinimum(angka) {
  var arr = [];
  var hasilbagi;
  var temp = '';
  var output = 0;

  for (var i = 1; i <= angka; i++) {
    hasilbagi = angka/i; //untuk mendapatkan faktornya berapa aja
    temp = String(i) + String(hasilbagi); //untuk menampung digit dari tiap faktor
	arr.push(temp)
}
 
for (var i = 0; i < arr.length; i++) {    
      //membandingkan digit yg paling sedikit dari tampung
      if (output === 0) {
        output = temp.length; 
      } 
      if (arr[i].length < output) {
          output = arr[i].length;
        }
      }
return output
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
