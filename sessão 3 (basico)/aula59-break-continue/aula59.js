const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

// Assim que a engine achar continue ele finaliza o if e pula pro for direto
    if (numero == 2 ) {
        continue;       
    }

    if (numero == 7)
    console.log(numero);
};