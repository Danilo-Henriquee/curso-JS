
const num1 = Number(prompt('Insira o primeiro numero'));
const num2 = Number(prompt('Insira o segundo número'));
const opcao = prompt('Insira o operador');

class Calculadora {
    constructor(num1, num2, opcao) {
        this.num1 = num1;
        this.num2 = num2;
        this.opcao = opcao;
    }

    soma() {
        alert(this.num1 + this.num2);
    }

    subtração() {
        alert(this.num1 - this.num2);
    }

    multiplicação() {
        alert(this.num1 * this.num2);
    }

    divisão() {
        alert(this.num1 / this.num2);
    }
}

const calculadora1 = new Calculadora(num1, num2, opcao);

if(opcao === '+') calculadora1.soma();
if(opcao === '-') calculadora1.subtração();
if(opcao === '*') calculadora1.multiplicação();
if(opcao === '/') calculadora1.divisão();