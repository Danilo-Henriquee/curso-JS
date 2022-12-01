// a recursividade possui um limite que deve ser estabelecido como no parametro passado
// funções recursivas são funções que se auto invocam como um loop
function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max)
}
recursiva(-10)
