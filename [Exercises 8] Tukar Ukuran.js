function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var bigword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var smallword = 'abcdefghijklmnopqrstuvwxyz'
  var output = ''

  for (var i = 0; i < kalimat.length; i++) {
    var found = false
    for (var j = 0; j < smallword.length; j++) {
      if (kalimat[i] === smallword[j]) {
        found = true
        output += bigword[j]
      }
      else if (kalimat[i] === bigword[j]) {
        found = true
        output += smallword[j]
      }
    }
    if (found === false) { //untuk menampilkan karakter selain alfabet
      output += kalimat[i]
    }
  }
  return (output)
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
