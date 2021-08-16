const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
    
//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue; // Pula interações e continua o lanço.
//     }

//     console.log(numero);

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...')
//         break; // Termina o lanço quando é encontrado o break.
//     }
// }
let i = 0;
while (i < numeros.length) {
    
    if (numeros[i] === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Pula interações e continua o lanço.
    }

    console.log(numeros[i]);

    if (numeros[i] === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break; // Termina o lanço quando é encontrado o break.
    }

    i++;
}