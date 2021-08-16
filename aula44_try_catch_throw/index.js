function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw('Algo inesperado aconteceu...');
        throw new Error('Algo inesperado aconteceu...');
    }

    return x + y;
}

try {
    console.log(soma('adasd', 5));
} catch(error) {
    console.log(error);
}