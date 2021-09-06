// A função definida com a palavra function tem uma variável especial que chama arguments que sustenta todos os argumentos enviados.

// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// Tanto faz se ter mais argumentos do que parâmetro ou vice-versa.

// function funcao(a, b, c) {
//     console.log(a, b, c);
//     console.log(arguments);
// }

// funcao(1, 2, 3, 4, 5, 6);

// Única maneira de trocar o valor padrão é enviando o undefined, porém não é uma boa lógica, seria melhor refazer a lógica.

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }

// funcao(2, undefined, 20);


// Atribuição via destrução no parâmetro em object e array.

// function funcao({nome: name, idade: age}) {
//     console.log(name, age);
// }

// let obj = { nome: 'Diogo', sobrenome: 'França', idade: 19}

// funcao(obj);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Diogo', 'Jesus', 'Silva']);

// Conceito de rest

// function conta(operador, acumulador, ...numeros) {
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// }

// conta('+', 1, 10, 5);


// Usa o rest operator no lugar dos arguments.

// const conta = function conta(...args) {
//     console.log(args);
// }

// conta('+', 1, 10, 5);