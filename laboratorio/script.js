const personagens = [
  {per: 5, nome: 'Goku'},
  {per: 3, nome: 'Naruto'},
  {per: 1, nome: 'Natsu'},
  {per: 2, nome: 'Kira'},
  {per: 4, nome: 'Luffy'}
];

// const newPersonagens = {};
// for(let {per, nome} of personagens) {
//   newPersonagens[per] = {per, nome};
// }

const newPersonagens = new Map();
for(let per of personagens.keys()) {
  newPersonagens.set(per);
}

console.log(newPersonagens);
console.log(newPersonagens)