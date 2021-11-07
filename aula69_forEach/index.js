// ForEach só tá disponível dentro de arrays.
// ForEach só itera.
// Recebe uma callback
// Recebe três parâmetros

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let i = 0;
a1.forEach((valor, indice, array) => {
  i += valor;
});
console.log(i);