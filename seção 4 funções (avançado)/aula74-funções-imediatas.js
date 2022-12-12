// IIFE -> Immediately invoked function expression

// função auto invocado precisa estar entre parenteses para ser uma função
// anonima e usa parenteses no final para chama-la
(function(idade, peso, altura) {
    const sobrenome = 'Marques';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Danilo'));
    }
    falaNome()
    console.log(idade, peso, altura)
})(18, 60, 1.70); 
// nesses parenteses pode ser passado os argumentos dos parametros dela