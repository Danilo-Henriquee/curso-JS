//nome pode ser uma variavel que pode ser utilizada assim, e a variavel nome só vai ser atribuida quando eu chamar a função


function saudacao(nome) {
    console.log(`Bom Dia ${nome}!`)
}

saudacao('danilo')


//outra forma de utilizar as funções é guardando em variaveis ou constantes - funcoes anonimas


let result = function(n){
   return n ** 0.5
}

console.log(result(9))
console.log(result(81))
console.log(result(64))
console.log(result(36))


//outra forma de forma mais simplificada é arrow function

let raiz = (n) => {
    return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(81))
console.log(raiz(64))
console.log(raiz(36))

