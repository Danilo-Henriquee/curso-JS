const nome = 'Danilo';
const sobrenome = 'Henrique';

const falaNome = () => nome + ' ' + sobrenome;
/*
acessando a chave exports pelo objeto module.

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/

/*
o this quando usado no escopo global ele reverencia o objeto
module, então usando o this se consegue fazer exports também.
*/
this.qualquerCoisa = 'O que eu quiser exportar';

module.exports = {
    nome, sobrenome
};

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Pessoa = Pessoa;