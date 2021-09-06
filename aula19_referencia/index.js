/*
Primitivos (imutáveis) - string, number, boolean, undefined, nul (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - Passados por referência.
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
// let a = [1, 5, 3];
// let b = a;

// a.unshift('Adicionei');
// console.log(a, b);

// CÓPIA VALORES POR REFERÊNCIA EM ARRAY.
// let a = [1, 2, 3];
// let b = [...a]; // Cópia de tipo de dado por referência.
// a.push(5)

// console.log(a, b)

// CÓPIA VALORES POR REFERÊNCIA EM OBJETOS
// const a = {
//     nome: 'Diogo',
//     sobrenome: 'França',
// }

// const b = {...a}; // Cópia objetos.

// a.nome="Breno";
// console.log(a, b)
