function konversiMenit(menit) {

  var number
  var sisamenit
  var jam = Math.floor(menit / 60);
  var sisamenit = menit % 60 ;
  if(sisamenit <= 9) {
    return jam + ':0' + sisamenit;
  }
  return jam + ':' + sisamenit;

}

console.log(konversiMenit(63));

