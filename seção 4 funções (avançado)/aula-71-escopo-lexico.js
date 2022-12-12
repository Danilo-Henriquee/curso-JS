const nome = 'Danilo';

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Henrique';
    falaNome();
}
usaFalaNome();