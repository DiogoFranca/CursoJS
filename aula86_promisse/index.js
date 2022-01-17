function rand(max, min) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo) {
  // resolve: é usado quando o código foi excutado com sucesso, então resolve ele pra mim.
  // Reject: é quando o código deu algum erro, então é rejeitado pela promisse.
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
    setTimeout(() => {
      // No resolve só podemos mandar um único parâmetro(dado) aqui.
      resolve(msg)
    }, tempo)
  })
}

// .then() será excutado quando for resolvido a nossa promisse, ou melhor, sempre que chamamos o resolve() o then será executado.
// .catch() quando reject for chamado o catch vai ser executado e capturado o erro.
esperaAi('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando dados da BASE', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi(1348, rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('ERRO:', e)
  })


// Usando callbacks

// esperaAi('Frase 1', rand(1, 3), () => {
//   esperaAi('Frase 2', rand(1, 3), () => {
//     esperaAi('Frase 3', rand(1, 3));
//   });
// });
