// function geraNumero(contador, callback) {
//     for(let i = 1; i < contador + 1; i++) {
//         console.log(i);
//         if(i === 5) {
//             callback(i);
//             continue;
//         }
//     }
// }

// geraNumero(10, (i) => {
//     console.log('Estamos na metade do laço:' + " " + `${i}`);
// });

/* 
    Callback nada mais é que uma função que é passada como argumento para uma outra função, e está aguardado o momento para ser executada. 
 */

// function func1(firstName, callback) {
//     callback(firstName, func3);
// }

// function func2(firstName, callback) {
//     callback(firstName + " " + "França");
// }

// function func3(nome) {
//     console.log(nome);
// }

// func1('Diogo', func2);