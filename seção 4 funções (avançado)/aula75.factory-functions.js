// Factory function (função fabrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        peso: p,
        altura: a,
        // a função agora com o get passa a ser uma propriedade do objeto
        // com o get se obtem o valor que a função retorna
        // isso passa a funcionar para os dois métodos abaixo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        set nomeCompleto(valor) {
            // valor = 'Danilo Henrique Marques'

            // valor.split em cada espaço que ele encontrar o valor sera
            // dividido e jogar esses pedaços em um array
            valor = valor.split(' ');
            // valor = [ 'Danilo', 'Henrique', 'Marques' ]

            // valor.shift irá remover o primeiro indice que no caso é
            // danilo e ira retornar esse valor para a propriedade nome.
            this.nome = valor.shift();
            //  valor = [ 'Henrique', 'Marques' ]

            // valor.join(' ') irá pegar o resto do array e juntar em uma 
            // string separada por espaços
            // dentro dos parenteses do join pode se colocar qualquer caracter
            // para separar o resto do array
            this.sobrenome = valor.join(' ');
        }
    };
}
const p1 = criaPessoa('Danilo', 'Henrique', 1.7, 60);
p1.nomeCompleto = 'Danilo Henrique Marques';

const p2 = criaPessoa('Ronaldo', 'Fenomeno', 1.8, 90)
console.log(p2.imc)
console.log(p1.nome)
console.log(p1.nomeCompleto)



