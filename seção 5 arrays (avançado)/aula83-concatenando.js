const a1 = [1,2,3];
const a2 = [4,5,6];

// concatenar usando concat
const a3 = a1.concat(a2, [7,8,9], 'Danilo');

// concatenar usando spread operator
const a4 = [...a1, 'Danilo', ...a2, ...[7,8,9]]
console.log(a4)