// Promisse.(all, race, resolve, reject)

const resolvida = Promise.resolve('asjdhfjsaf').then(valor => {
  console.log(valor);
})

const rejeitada = Promise.reject('1414').catch(e => {
  console.log(e);
})

// const array = [
//   mostraAlgo('kjasdhsjdah'),
//   mostraAlgo('asjhfjfafasa'),
//   mostraAlgo(0344024)
// ]


// Promise.race(array)
//   .then(valor => {
//     console.log(valor);
//   })
//   .catch(e => {
//     console.log('ERRO:', e);
//   })

// array[0].then(valor => {
//   console.log(valor)
// })

// array[1].then(valor => {
//   console.log(valor)
// })

// array[2].then(valor => {
//   console.log(valor)
// })



function mostraAlgo(dado) {
  return new Promise((resolve, reject) => {
    if(typeof dado !== 'number') {
      reject('Erro')
      return;
    };

    resolve(dado);
  })
}





// const btn = document.querySelector('button');

// function rand(max, min) {
//   max *= 1000;
//   min *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// btn.addEventListener('click', () => {
//   pegaDado()
//   .then(inputValue => {
//     console.log('Excutei primeiro')
//     return trataDado(inputValue);
//   })
//   .then(dadoTratado => {
//     mostraDado(dadoTratado);
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

// function pegaDado() {
//   return new Promise((resolve, reject) => {
//     const dado = document.querySelector('input').value;
//     if(Number(dado)) {
//       reject('Dado inválido.')
//       return;
//     }
//     setTimeout(() => {
//       console.log('Pegando os dados...')
//       resolve(dado);
//     }, rand(1, 3))
//   })
// }

// function trataDado(inputValue) {
//   return new Promise((resolve, reject) => {
//     if(inputValue.length > 12) {
//       reject('Dado inválido.')
//       return;
//     }
//     setTimeout(() => {
//       console.log('Tratando os dados...')
//       const array = inputValue.split(' ');
//       const firstName = array[0];
//       const secondName = array[1]
//       resolve([firstName, secondName]);
//     }, rand(1, 3));
//   })
// }

// function mostraDado(dadoTratado) {
//   setTimeout(() => {
//     console.log('Mostrando os dados')
//     const [firstName, secondName] = dadoTratado;
//     console.log(`FirstName: ${firstName}`)
//     console.log(`SecondName: ${secondName}`)
//   }, rand(1, 3));
// }