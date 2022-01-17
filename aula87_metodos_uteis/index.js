function rand(max, min) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO')
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise')
      return;
    }, tempo)
  })
}

// Promise.all é justamente o que o nome "all" diz, só resolve se todas as promises resolverem.
// Também temos Promise.race, que é "uma corrida" de promises... Ou seja, quando a primeira delas resolverem, completa e retorna o valor. Se uma falar, falha todas.
// Todos esses métodos dentro de promises, são para arrays de promises... Ou seja, você manda várias promessas e a linguagem faz o que você pedir.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise -> tudo sobre os métodos do construtor Promise.

// const promises = [
//   esperaAi('Promise 1', rand(1, 5)),
//   esperaAi('Promise 2', rand(1, 5)),
//   esperaAi('Promise 3', rand(1, 5)),
//   esperaAi(1000, rand(1, 5)),
//   // 'Outro valor' // se esse for primeiro, não é uma promisse, mas como se fosse uma promessa resolvida.

// ]

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise.all resolve todas as promises.

// se houver um erro, o reject vai mostrar a mensagem e rejeitar todas as promessas.
// Promise.all chama todas as promises ao mesmo tempo.

// Promise.all(promises)
//   .then(valor => {
//     console.log(valor)
//   })
//   .catch(erro => {
//     console.log(erro);
//   })

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// O race vai retorna a primeira promessa que for resolvida.

// Obs: um dado que não for uma promessa, ela já é resolvido, portanto, será retornada.

// Promise.race(promises)
//   .then(valor => {
//     console.log(valor)
//   })
//   .catch(erro => {
//     console.log(erro);
//   })

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Utilizamos o Promisse.resolve() e Promisse.reject quando já temos o dado e também retorno uma promessa já resolvida ou rejeitada direto.

// function baixaPagina() {
//   const emCache = true;

//   if(emCache) {
//     return Promise.resolve('Página em cache');
//   } else {
//     return esperaAi('Baixei a página', 3000)
//   }
// }

// baixaPagina()
//   .then(dadosPagina => {
//     console.log(dadosPagina);
//   })
//   .catch(e => console.log('ERRO:', e));


