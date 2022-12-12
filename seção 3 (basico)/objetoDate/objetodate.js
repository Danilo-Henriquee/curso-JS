//                    ano   mes   dia  hora   min   seg    mili
const data = new Date(2019,   3,   20,   15,   14,   27,   500)
console.log(data.toString())

// Em formato string
// os meses começam do zero então jan 0, fev 1...
// dias da semana o dia 0 é domingo, sabado é 6

const dia = new Date('2019-04-20 20:20:59')


console.log('dia', dia.getDate()) // para pegar o Dia
console.log('mes', dia.getMonth() + 1) // para pegar o mes | +1 para mostrar o mes atual
console.log('ano', dia.getFullYear()) // para pegar o ano
console.log('hora', dia.getHours()) // para pegar a hora
console.log('minuto', dia.getMinutes()) // para pegar o minuto
console.log('segundo', dia.getSeconds()) // para pegar o segundo
console.log('milesimo', dia.getMilliseconds()) // para pegar o milesimo
console.log('dia da semana', dia.getDay()) // para pegar dia da semana
console.log(dia.toString())


console.log(Date.now()) // irá mostrar a data atual do marco zero em milisegundos
// e se eu colocar esses milisegundos dentro da função new date irá retornar a data atual normal
const dataAtual = new Date(1654809566265)
console.log(dataAtual) // 2022-06-09T21:19:26.265Z