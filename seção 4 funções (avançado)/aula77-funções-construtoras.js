// Funções construtoras ela cria o objeto ela ja retorna o objeto
// função construtora -> objetos
// função fabrica -> objetos

// construtora -> precisa sempre iniciar o nome com letra maiscula Pessoa().

// essa função não precisa de return
function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados se criam com constantes ou variaveis
    const ID = 123456;

    const metodoInterno = function() {

    };
    // Atributos ou métodos publicos se criam com o this.'valor'
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": sou um método");
    };
 }

// a palavra 'new' cria um novo objeto vazio, ela faz o this dentro da função
// apontar para o objeto vazio criado e ja retorna o objeto criado para
// a variavel ou constante que no caso é p1 e p2 .
// não precisa do return a função por si só ja retorna o corpo dela mesma.
const p1 = new Pessoa('Danilo', 'Henrique');
const p2 = new Pessoa('Maria', 'Joaquina');

console.log(p2.nome)
