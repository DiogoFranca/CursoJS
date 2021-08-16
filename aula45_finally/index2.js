function dividir (n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new TypeError('O valor digitado não é um número.');
    }

    return n1 / n2;
}

try {
    console.log(dividir(3, 6));
} catch (e) {
    console.log('Um erro aconteceu...');
} finally {
    console.log('Use outros valores.');
}