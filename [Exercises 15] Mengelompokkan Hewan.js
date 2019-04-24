function groupAnimals(animals) {
  // you can only write your code here!
  //sorting
  var done = false;
  while (!done) {
   done = true;
   for (var i = 0; i < animals.length-1; i++) {
    for (var j = 0; j < animals.length-i-1; j++) {
    // kalo untuk besar ke kecil, tinggal diganti jadi < aja
      if (animals[j] > animals[j+1]) {
        done = false;
        var tmp = animals[j];
        animals[j] = animals[j+1];
        animals[j+1] = tmp;
      }
    }
    }
  }
  //untuk ngecek jika ada yg sama huruf depannya, masuk ke array yg ada. jika belum, buat array baru
  var temp = []
  for (var i = 0; i < animals.length; i++) {
    var found = false
    for (var j = 0; j < temp.length; j++) {
      if (temp[j][0][0] === animals[i][0]) {
        found = true
        temp[j].push(animals[i])
      }
    }
    if (found === false) {
      temp.push([animals[i]])
    }
  }
  //sorting isi didalam array multidimensional
  for ( var i = 0; i < temp.length; i++) {
    var arr = [];
    for (var j = temp[i].length-1; j >= 0; j--) {
      arr.push(temp[i][j]);
    }
    temp[i] = arr;
  }
return temp; 
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
