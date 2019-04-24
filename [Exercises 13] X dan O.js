function xo(str) {
  
  var i;
  var jmlO = 0;
  var jmlX = 0;


  for (i=0; i < str.length; i++) {   
    if (str[i] === 'x') {
      jmlX = jmlX + 1;
    }
    else {
     jmlO = jmlO + 1;
    }
    
  }  
 
 return jmlX === jmlO
}

console.log(xo('xoxox'));
