// Quando não se passa os parametros para a função
// todos os argumentos passados serão guardados em uma variavel arguments
// que é um objeto que contem os indices mais os valores dos argumentos

// só funciona para funções criadas pelo metodo tradicional function nome()
function funcao(){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao(1,2,3,4,5,6,7,8,9,10)