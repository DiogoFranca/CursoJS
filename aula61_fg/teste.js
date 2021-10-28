function* teste1(n) {
    yield* teste2();
    yield 'é';
    yield 'Diogo';
}

function* teste2() {
    yield 'Oi';
    yield 'meu';
    yield 'nome';
}

const gerador = teste1(10);
console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);
