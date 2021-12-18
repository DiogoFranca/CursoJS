//Some todos os números (reduce)


// O propósito do reduce() é reduzir uma array a único valor.

const numeros = [1, 6];

const total = numeros.reduce((i, valor) => {
  console.log(i);
  console.log(valor);
  i += valor;
  return i;
}, 0);
console.log(total);

// Retorne um array com os pares (Filter)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, valor) => {
//   if(valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);
// console.log(total);

// Retorne um array com o dobro dos valores (map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, valor) => {
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []);
// console.log(total);

// Retorne a pessoa mais velha

// const pessoas = [
//   {nome: 'Luiz', idade: 62},
//   {nome: 'Maria', idade: 23},
//   {nome: 'Eduardo', idade: 55},
//   {nome: 'Letícia', idade: 19},
//   {nome: 'Rosana', idade: 32},
//   {nome: 'Wallace', idade: 47}
// ];

// const pessoaMaisVelha = pessoas.reduce((accu, curr) => {
//   if(accu.idade > curr.idade) return accu;
//   return curr;
// });

// console.log(pessoaMaisVelha);