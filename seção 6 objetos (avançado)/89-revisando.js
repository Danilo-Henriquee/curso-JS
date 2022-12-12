// duas formas para se declarar objetos

// forma literal usando chaves
const objeto = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3",

    // Função dentro de objeto é denominado método
    falaChave: () => console.log()
}

// forma usando construtor
const objeto2 = new Object();

// existe essa forma de se selecionar e se acrescentar em um objeto
// usando colchetes
objeto2['chave1'] = 'Valor 1';
objeto2['chave2'] = 'Valor 2';

// e existe a forma com notação de ponto
objeto2.chave3 = 'Valor3';
objeto2.chave4 = 'Valor 4';

objeto2.falaChave = () => console.log();
objeto2['falaChave1'] = () => console.log();

// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1f = criaPessoa('Danilo', 'Marques');

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this);
}

// a palavra new primeiramente vai criar um objeto vazio {}
// e vai atrela o this no corpo da função pessoa
const p1 = new Pessoa('Danilo', 'Marques');
p1.nome = 'Robson'
const p2 = new Pessoa('Maria', 'Fernanda');
// no p1 this.nome é danilo, no p2 this.nome é Maria
// o this vai variar de acordo com quem ta criando

// para travar um objeto e ele não sofrer nenhuma alteração
Object.freeze(p1);
// ele deve ser posicionado logo após a criação do objeto por conta 
// da precedencia

console.log(p1)
console.log(p2)

