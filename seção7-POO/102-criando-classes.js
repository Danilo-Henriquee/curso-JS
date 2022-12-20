// Criando um classe
class Pessoa {
    // esse método constructor só é usado quando precisar
    // passar parametros para uma classe
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Danilo', 'Henrique');

console.log(p1)