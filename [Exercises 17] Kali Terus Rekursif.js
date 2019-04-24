function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var number = angka.toString()
    
  if (number.length === 1) {
    return number
  }
  else if (number.length > 1) {
    var output = (number % 10) * kaliTerusRekursif(Math.floor(angka/10)) + ''
  }
  while (output.length > 1) {
    output = (output % 10) * kaliTerusRekursif(Math.floor(output/10)) + ''
  }
  // console.log(output)
  // if (hasil.length === 1) {
  //   return hasil
  // }
  return output
}



// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
