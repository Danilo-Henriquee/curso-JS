function retonaHora(data) {

    // Instanceof está perguntando se data é uma instancia da 
    // função construtora Date.
    if (data && !(data instanceof Date)) {

        // throw new typeError() quer dizer que estou iniciando
        // um novo tipo de erro do jeito que eu quero.
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',    // Colocando 2 digitos para hora
        minute: '2-digit',  // Colocando 2 digitos para hora
        second: '2-digit',  // Colocando 2 digitos para hora
         
        hour12: false       // Colocando o formato 24 horas
    })                      // Ja que o formato de 12 está desativado
}

try {
    const data = new Date('01-01-1970, 12:58:12')
    const hora = retonaHora()                     
    console.log(hora)
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia.')
}


