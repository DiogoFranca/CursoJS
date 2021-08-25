// function retonaHora (data) {
//     if (data && !(data instanceof Date)) {
//         throw new TyperError('Esperando instância de Date');
//     }

//     if (!data) {
//         data = new Date();
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false

//     })
// }

// try {
//     const data = new Date('01-01-1970 12:58:12');
//     const hora = retonaHora();
//     console.log(hora);
// } catch(e) {
//     // Tratar erro
// } finally {
//     console.log('Tenha um bom dia.');
// }


let nome = 'Diogo';

function verificarNome (nome) {
    if (typeof nome !== 'string') {
        throw TypeError('Algo de errado aconteceu...')
    }
}


try {
   verificarNome(nome); 
} catch(e) {
    console.log(e);
} finally {
    console.log('Error tratado.');
}

































// try {
//     // É executa quando não há erros.
//     console.log('Abri um arquivo.');
//     console.log('Manipulei o arquivo e gerou erro.');
//     console.log('Fechei o arquivo.');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally');
//     }

// } catch (e) {
//     // É executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado.');
// }