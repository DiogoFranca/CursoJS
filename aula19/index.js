/*
Primitivos (imutáveis) - string, number, boolean, undefined, nul (bigint, symbol) - valor

Referência (mutável) - array, object, function
*/

// NÃO TEM COMO MODIFICAR UMA STRING COMO ARRAY
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome);


// CÓPIAS
// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// REFERÊNCIA
let a = [1, 5, 3];
let b = a;

console.log(a, b);
