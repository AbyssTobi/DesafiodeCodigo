//Reverta a ordem das palavras nas frases, mantendo a ordem das palavras
// A frase é: Hello, world! OpenAI is amazin.

function invertePalavras(frase) {

    var palavras = frase.split(" ");
    
    var invertePalavras = palavras.reverse();
    
    var inverteFrase = invertePalavras.join(" ");
    
    return inverteFrase;
  }
  
  var input = "Hello, World! OpenAI is amazing.";
  var output = invertePalavras(input);
  console.log(output);