const obj = {
  name: 'Diogo',
  age: 19
}

Object.freeze(obj);

obj.hair = 'preto';
console.log(obj);
