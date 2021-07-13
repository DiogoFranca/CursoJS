const data = new Date('1567-06-29 21:54:12');
const diaSemana = data.getDay();
let diaSemanaTexto;


// if (diaSemanaTexto === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemanaTexto === 0) {
//     diaSemanaTexto = 'Segunda';
// } if (diaSemanaTexto === 1) {
//     diaSemanaTexto = 'Terça';
// } if (diaSemanaTexto === 2) {
//     diaSemanaTexto = 'Quarta';
// } if (diaSemanaTexto === 3) {
//     diaSemanaTexto = 'Quinta';
// } if (diaSemanaTexto === 4) {
//     diaSemanaTexto = 'Sexta';
// } if (diaSemanaTexto === 5) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }

switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
    case 3:
        console.log('Quarta');
        break
    case 4:
        console.log('Quinta');
        break
    case 5:
        console.log('Sexta');
        break
    case 6:
        console.log('Sábado');
        break
    default:
        console.log('Fim');
        break
}