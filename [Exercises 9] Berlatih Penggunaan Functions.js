function shoutOut() {
  return 'Halo Function!'
}

console.log(shoutOut());

/* ini soal nomer 2 */

function calculateMultiply(num1, num2){
  return a = num1 * num2;
}

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);

/* ini soal nomer 3 */

function processSentence() {
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' +address+ ', dan saya punya hobby yaitu ' +hobby+ '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"


