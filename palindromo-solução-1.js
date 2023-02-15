//solução 1
function verificaPalindromo(string) {
    if (!string) return;

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(""));

if string seja um palindromo ele ira devolver'true', else ira devolver 'false'; 
