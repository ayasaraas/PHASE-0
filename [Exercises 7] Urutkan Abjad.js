function urutkanAbjad(str) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var arr = [];
  var output;

  for (var i = 0; i < alfabet.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (alfabet[i] === str[j]) {
        arr.push(str[j])
      }
    }
  }
  output = arr.join("")
  return output
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
