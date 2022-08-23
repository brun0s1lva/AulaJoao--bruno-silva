

function soma (x , y) {
    return console.log(x, "+" , y , " = ", x +y )
} // função com parâmetros q podem ser de qualquer tipo 
soma(2, 4)
soma(5, 6)
soma(4) // aqui temos o exemplo onde a função so recebe o parametro x e não y, resultado 
// em NaN

const bobao = (c) => {
    return
} // aqui temos uma chamada no estilo 'arrow function' que pode ser colocada
// dentro de uma variavel!

bobao("oi")
bobao(6)

function mensagem () {
    console.log("oii")
} // função simples sem parêmetros 
mensagem()