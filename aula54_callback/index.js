// callback é um tipo de função que só é executada após o processamento de outra função. 

// Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.

// O javascript ele é assíncrono, por exemplo, ele não espera função executar todo seu código se houver uma demora, ele já passa para a próxima função, em seguida, excuta a que pulou. Ai vem os callbaks que server pra controlar o fluxo do javascript assíncrono, colocando a ordem desejada usando os callbaks.



function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if(callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if(callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if(callback) callback();
  }, rand());
}


// Callback hell

// f1(function() {
//   f2(function() {
//     f3(function() {
//       console.log('Olá mundo!')
//     })
//   })
// })

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}


function f2Callback() {
  f3(f3Callback)
}

function f3Callback() {
  console.log('Olá mundo');
}