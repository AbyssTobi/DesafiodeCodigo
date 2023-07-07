function removaDuplicados(str) {
    var resultado = str[0];
    for (var i = 1; i < str.length; i++) {
      var char = str[i];
      if (str.indexOf(char) === i) {
        resultado += char; 
      }
    }
    return resultado;
  }
  
  var input = "Hello, World!";
  var output = removaDuplicados(input);
  console.log(output);