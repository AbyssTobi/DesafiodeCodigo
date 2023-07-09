// Encontre a substring palindroma mais longa na string abaixo:
// a. Input: "babad"

function maiorPalindroma(str) {
    var maior = "";
    for (var i = 0; i < str.length; i++) {
      for (var j = i; j < str.length; j++) {
        var substring = str.slice(i, j + 1);
        if (umaPalindroma(substring) && substring.length > maior.length) {
          maior = substring;
        }
      }
    }
    return maior;
  }
  
  function umaPalindroma(str) {
    var inversa = str.split("").reverse().join("");
    return str === inversa;
  }
  
  var input = "babad";
  var output = maiorPalindroma(input);
  console.log(output);