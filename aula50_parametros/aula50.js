// - A função definida com a palavra function tem uma variável especial que chama arguments que sustenta todos os argumentos enviados.

// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// -------------------------------------------------------------------------

// - Podemos enviar tantos argumentos mesmo tendo nenhum ou menos parâmetros do que foi enviado, que não vai ter erro e vai ser tudo sustentado dentro da váriavel especial arguements.

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// - O contrário: menos argumentos enviado e mais parâmetros. Simplesmente, o javascript vai entender que não foi enviado um valor/parâmetro, então o JS seta um valor padrão underfined para os parâmetros criados, porém não inicializados como se fosse uma váriavel. O js não vai gerar erro nenhum.

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// ------------------------------------------------------------------------

// Única maneira de trocar o valor padrão é enviando o undefined, porém não é uma boa lógica, seria melhor refazer a lógica.

// function funcao(a, b) {
//     console.log(a + b);
// }
// funcao(2);

// - Maneira antiga de seta um valor padrão

// function funcao(a, b) {
//     b = 0 || false;
//     console.log(a + b);
// }
// funcao(2);

// Maneira moderna de senta-se um valor padrão em uma funcão.

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2);

// Pular um parâmetro, e assumir o valor padrão setado, enviando um argumento. Não é legal fazer isso, é melhor refazer à lógica.

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined, 10);

// ------------------------------------------------------------------------

// - Atribuição via desetruturação no parâmetro em object e array.

// - Via objeto

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Diogo', sobrenome: 'França', idade: '19'});

// - Via array

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['diogo', 'franca', 19]);

// ------------------------------------------------------------------------

// - Pode usar o conceito de operator rest dentro do parâmetro da funçao.

// function conta(operador, acumulador, ...numeros) {
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// }
// conta('+', 0, 20, 30, 40, 50);

// ------------------------------------------------------------------------

// -  Usa o rest operator no lugar dos arguments em arrow functions.

// const conta = function conta(...args) {
//     console.log(args);
// }
// conta('+', 1, 10, 5);