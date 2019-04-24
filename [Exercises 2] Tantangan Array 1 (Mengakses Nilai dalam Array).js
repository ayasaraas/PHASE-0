function balikString(str) {
  var tmp = '' //menampung tiap huruf
  for (var i = str.length-1; i >= 0; i--) { //looping dari karakter terakhir
    tmp += str[i] //menginputkan karakter sesuai i
  }
  return tmp
}

console.log(balikString('Hello World!'))

"/
