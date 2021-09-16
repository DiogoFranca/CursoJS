// Callback: funções que são executadas quando uma ação ocorre.

// Callback nada mais do que uma função que é executada dentro de outra, e geralmente é usada para executar as funções em ordem que achar mais pertinente.

// -------------------------------------------------------------

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function f3() {
//     console.log('f3');
// }

// f1();
// f2();
// f3();
// console.log('Olá mundo!');

// --------------------------------------------------------
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;

//     return Math.floor(num);
// }

// function f1(callback) {
//     setTimeout(function () {
//         console.log('f1');
//         if (callback) callback();
//     }, rand());
// }

// function f2(callback) {
//     setTimeout(function () {
//         console.log('f2');
//         if (callback) callback();
//     }, rand());
// }

// function f3(callback) {
//     setTimeout(function () {
//         console.log('f3');
//         if (callback) callback();
//     }, rand());
// }

// f1(f1callback);

// function f1callback() {
//     f2(f2callback);
// }

// function f2callback() {
//     f3(f3callback);
// }

// function f3callback() {
//     console.log('Olá mundo!');
// }

// ----------------------------------------
// Callback hell

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!')
//         });
//     });
// });

// Callback é uma função que será executada dentro de outra, no momento que você achar pertinente. Daí o objeto é pra isso mesmo que você descreveu, geralmente para que uma função seja executada após outra função. Esse processo pode continuar quantas vezes você preferir, uma função, que chama outra, que chama outra, etc (isso é chamado de callback hell, e não é algo muito bom)...


