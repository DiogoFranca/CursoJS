function rand(max, min) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}