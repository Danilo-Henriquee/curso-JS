function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Danilo', 'Marques');
const pessoa2 = new Pessoa('Maria', 'Fernanda');

console.log(pessoa1.nomeCompleto)