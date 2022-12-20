function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Erro'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando os dados da base', rand(1, 3));
    })
    .then((resposta) => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    /*
    se houver qualquer erro ou uma condicional for satisfeita e retornar reject
    o bloco de códigos catch irá tratar esse erro igual ao try catch.
    */ 
    .catch(e => {
        console.log('Erro:', e)
    });
