// ... rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
// const [um, dois, tres, ...restante] = numeros;

// console.log(um, dois, tres);
// console.log(restante);

// Pular valores em atribuição via desestruturação
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
// const [um, , , , cinco, , sete, ...restante] = numeros;

// console.log(um, cinco, sete);
// console.log(restante);


// Útil
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(numeros[1][1]);
// console.log(numeros[1][2]);

// MODO COMPLEXO
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [ , , [sete, , ]] = numeros;

// console.log(sete);

// TESTE

// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [lista1, lista2, lista3] = numeros;

// console.log(lista1[2]);

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);