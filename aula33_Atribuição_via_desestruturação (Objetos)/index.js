const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação

// const {nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);


// Dá nomes as chaves

// const {nome: name, endereco: address, idade: age} = pessoa;
// console.log(name, address, age);

// Acessar propriedades de uma chave que contenha um objeto.

// const {endereco: {rua: street = "Rua não foi específicada", numero: number}, endereco} = pessoa;
// console.log(street, number, endereco);

// Operador rest

// const {nome, sobrenome, endereco: {...rest}} = pessoa;
// console.log(nome, sobrenome, rest);


