var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
  
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);


 var bulan=input[3].split("/");
  
  switch (bulan[1]){
    case '01' : 
      bln = "Januari"
      break;
    case '02' : 
      bln = "Februari"
      break;
    case '03' : 
      bln = "Maret"
      break;
    case '04' : 
      bln = "April"
      break;
    case '05' : 
      bln = "Mei"
      break;
    case '06' : 
      bln = "Juni"
      break;
    case '07' : 
      bln = "Juli"
      break;
    case '08' : 
      bln = "Agustus"
      break;
    case '09' : 
      bln = "September"
      break;
    case '10' : 
      bln = "Oktober"
      break;
    case '11' : 
      bln = "November"
      break;
    case '12' : 
      bln = "Desember"
      break;
  }
    
  console.log(bln);


  bulanJoin = (bulan.join("-"));

  bulanSort= bulan.sort(function(value1, value2) { return value2 - value1 });  

  console.log(bulanSort); 
  console.log(bulanJoin);


  var nama = input[1].slice(0,15); /*untuk menampilkan karakter ke 0-15*/
  
  console.log(nama);

  return;

}

dataHandling2(input);
