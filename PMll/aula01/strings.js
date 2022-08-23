const escola = "Cod3r"

console.log ("valor da posição", escola.charAt(4)) //retorna valor da tabela UNICODE
console.log (escola.charAt(5)) //indice associado a varivel escola

console.log (escola.charCodeAt(3)) //inclui indice 1 ate o final 
console.log (escola.indexOf('3')) //indice 0 a 2 

console.log (escola.substring(1)) //escola é um valor de tipo  literal, ou seja posso passar direto sem variavel 
console.log (escola.substring(0,3))
console.log ('Escola' . concat(escola).concat("!"))//poderia usar console.log('Escola' + escola + "!")
// + no contexto numerico vai somar mas no string vai concatener

console.log(escola.replace(3,  'e'))
console.log (escola.replace(/\d/, 'e')) //regex pra substituir todos os digitos numericos dentro do texto por e

console.log ('Ana,Maria,Pedro'.split(',')) // Conversão para array. pode ser usado regex /,/

