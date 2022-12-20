function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new Error('Erro'));
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all - resolve todas as promisses no tempo em que a primeira foi
// se houver um erro nessas promisses todas serão rejeitadas.
const promises = [ 
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.all(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    });


// Promise.race - pode se entregar todas as promessas, mas a primeira
// que for executada vai ser ela que vai ser retornada
Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });

// Promise.resolve - ele ja logo de cara ja resolve a Promise e vai direto
// pro bloco de código then.

// Promise.reject - ele ja logo de cara ja rejeita a Promise e vai direto
// pro bloco de código catch.
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log(e);
    })