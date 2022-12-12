function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
/**
 * Criando novos elementos no prototype da função irá ser criado
 * um __proto__ que contém todos os métodos e propriedades
 * que vão ser criadas, as novas instâncias derivadas da 
 * função construtora Pessoa irão herdar também seu __proto__. 
 */

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome;
}
// pessoa1.__proto__ é igual a Pessoa.prototype são a mesma coisa.

/**
 * Criações da função construtora são instâncias, então pessoa1 e
 * pessoa2 são instâncias da função Pessoa, então todas as instâncias
 * dessa função irão herdar o prototype da função, ou seja,
 * todos os métodos ou propriedades que eu inserir no prototype
 * da função poderão ser acessados pelas instâncias.
 */

// Pessoa1 possui agora o método nomeCompleto atrelado
const pessoa1 = new Pessoa('Danilo', 'Marques');

// Pessoa2 possui agora o método nomeCompleto atrelado
const pessoa2 = new Pessoa('Maria', 'Fernanda');

console.log(pessoa1.nomeCompleto)
/**
 * O motor do JS vai primeiramente procurar no corpo do objeto, ou
 * seja, no corpo da função construtora que criou ele, então se eu
 * crio um método dentro do objeto ele sobreescreve o método que eu
 * criar no prototype da função construtora.
 */