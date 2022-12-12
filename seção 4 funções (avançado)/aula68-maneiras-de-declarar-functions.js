// Maneiras de se declarar funções

// Tradicional
function falaOi() {
    console.log('oi');
}


// First-class function - que executa outras funções
function executaFunc(func){
    console.log('Executei a função abaixo');
    func();
}
executaFunc(falaOi);


// Function expression
// posso jogar essa constante como função anonima como no setInterval por exemplo
const souUmDado = function() {
    console.log('Sou um dado')
};
souUmDado();


// Arrow function
const FuncaoArrow = () => {
    console.log('Sou uma arrow function');
}
FuncaoArrow();


// Dentro de um objeto 
const obj = {
    falar: function(){
        console.log('estou falando...')
    }
}


