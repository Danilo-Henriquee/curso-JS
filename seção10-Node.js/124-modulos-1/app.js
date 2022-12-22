// primeira maneira - importa todos os exports.
const mod1 = require('./mod1');

// segunda maneira - importa somente a função falaNome.
const falaNome = require('./mod1').falaNome;

// terceira maneira - com atribuição via desestruturação.
const { nome, sobrenome, falaNome1 } = require('./mod1');
const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Danilo', 'Henrique');
console.log(p1)

const axios = require('axios');
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response))
    .catch(e => console.log(e))