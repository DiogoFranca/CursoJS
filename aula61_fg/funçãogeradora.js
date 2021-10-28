// Exemplo 1 de função geradora.

// function* gerador1() {
//     for(let i = 0; i < 5; i++) {
//         yield i;
//         console.log('oi');
//     }

// }

// const valores = gerador1();
// console.log(valores.next());
// console.log(valores.next());
// console.log(valores.next());

// Exemplo 2 de função geradora.

function* gerador2() {
    let i = 0;

    while(true) {
        yield i;
        console.log('oi');
        i++;
    }
}

function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4() {
    yield* gerador3(); // usar o asterisco no yield com intenção de delegar uma parte para o gerador 3 acima.
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do return');
    } // O return dentro de um gerador para quando chega nele.

    yield function() {
        console.log('Vim do y3');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();

// yield "pausa" a execução da função e faz o yield (quase um retorno) de valor...


