/* 
    Aqui está começando do zero
    e o limite é 5, e o incremento ++
*/
for (let i = 0; i <= 5; i++) { 
    console.log(`Linha ${i}`)
}

/*
    Aqui está começando do 500
    e vai até o 400
    diminuindo de 5 em 5
*/
for (let i = 500; i >= 400; i -= 5) {
    console.log(`Linha ${i}`)
}

for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par)
}