/*  Gerador de um numero aleatorio de 1 a 50
*/
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

/*
    Verifica e mostra os valores até achar o numero 10, 
    achando o numero 10 ele finaliza o laço
*/
while (rand !== 10) {
    rand = random(min , max);
    console.log(rand)
};

do{
    rand = random(min , max);
    console.log(rand)
} while(rand !== 10);