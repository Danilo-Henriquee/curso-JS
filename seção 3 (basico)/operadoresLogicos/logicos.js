/*
&& = add todos precisam ser verdadeiras
|| = or 
! = not 
*/

let expressaoAnd = true && true && true && true //Todos precisam ser True para retornar True
//let expressaoAnd = true && true && false && true - false

let expressaoOr = false || false || false || false // todas precisam ser false para retornar false
//let expressaoOr = false || false || true || false - true

const usuario = 'luiz'
const senha = '123456'
//                     true                 false
let vaiLogar = usuario === 'luiz' && senha === '123456'
//console.log(vaiLogar) -> false

console.log(!false) //vai retornar true, pq inverteu o false 
console.log(!!!true) //posso negar mais de uma vez então vai passar para false - true - false- true