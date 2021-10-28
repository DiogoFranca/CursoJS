//               -5      -4       -3         -2        -1
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(começa, qt elementos vão ser deletados, elem1, elem2, elem3);

// Obs: o método splice altera o array original.

// Number.MAX_VALUE : Esse método que contêm o maior número que se pode ter no javascript, usamos eles no exemplo para pegar todos os elementos após começo for informado.

// const removidos = nomes.splice(1, 3); // Usando valores positivos
// console.log(nomes, removidos);

// const removidos = nomes.splice(1, 3); // Valores negativos
// console.log(nomes, removidos);

// const removidos = nomes.splice(1, Number.MAX_VALUE); // O método -> Number.MAX_VALUE é o maior número possível no javascript.
// console.log(nomes, removidos);

// Simula método pop().
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);

// Simula método shift().
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// Simula o método push().
// const removidos = nomes.splice(nomes.length, 0, "elemento novo");
// console.log(nomes, removidos);

//Simula o unshift().
// const removidos = nomes.splice(0, 0, 'qualquer elemento');
// console.log(nomes, removidos);

// const removidos = nomes.splice(-5, 3, 'a', 'b', 'c'); // Temos a possibilidade adicionar elementos no splice, no código indicamos a onde vamos começar no array no caso o valor -5, no 2 argumento, quantos elementos queremos remover, e no 3 argumento em diante, podemos adicionar elementos no array.

// console.log(nomes, removidos);