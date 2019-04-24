function totalDigitRekursif(angka) {
  // you can only write your code here!
  var number = angka % 10
  if (number === 0) {
    return 0
  }
  return number + totalDigitRekursif(Math.floor(angka/10))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
