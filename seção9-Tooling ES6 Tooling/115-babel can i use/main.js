class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

/**
Para transformar esse código para um código mais antigo usando babel
no terminal vai usar:
@npx babel main.js -o bundle.js --presets=@babel/env
aonde está main.js é o nome do arquivo em que se deseja transformar.
*/
