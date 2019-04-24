function balikKata(kata) {

var i;
var balik = ' ';

  for (i = kata.length - 1; i >= 0; i--) {

    balik += kata.charAt(i);
  }

return balik;
}

console.log(balikKata('Coding is my hobby'));
