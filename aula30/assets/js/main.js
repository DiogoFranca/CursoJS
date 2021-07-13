function date () {
    // Pegar a data atual
    function getCurrentDate () {
        return new Date();
    }
    // Pegar o dia da semana
    function getDayOfTheWeek(date) {
        const dayOfTheWeek = date.getDay();

        switch (dayOfTheWeek) {
            case 0: return 'domingo';
            case 1: return 'segunda-feira';
            case 2: return 'terça-feira';
            case 3: return 'quarta-feira';
            case 4: return 'quinta-feira';
            case 5: return 'sexta-feira';
            case 6: return 'sábado';
            default:
                return '';
        }
    }
    // pegar dia do mês
    function getDayOfTheMonth (date) {
        return date.getDate();
    }

    // pegar o mẽs
    function getMonth (date) {
        switch (date.getMonth()){
            case 0: return 'janeiro';
            case 1: return 'fevereiro';
            case 2: return 'março';
            case 3: return 'abril';
            case 4: return 'maio';
            case 5: return 'junho';
            case 6: return 'Julho';
            case 7: return 'agosto';
            case 8: return 'setembro';
            case 9: return  'outubro';
            case 10: return 'novembro';
            case 11: return 'dezembro';
        }
    }

    // pegar o ano
    function getYear (date) {
        return date.getFullYear();
    }
    // pegar a hora
    function getHour (date) {
        return date.getHours();
    }
    // pegar segundos
    function getSeg (date) {
        return date.getSeconds();
    }

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }
    // mostrar data formatada
    function showDate () {
        const result = document.querySelector('h1');
        result.innerHTML = `${getDayOfTheWeek(getCurrentDate())}, ${getDayOfTheMonth(getCurrentDate())} de ${getMonth(getCurrentDate())} de ${getYear(getCurrentDate())} ${zeroAEsquerda(getHour(getCurrentDate()))}:${zeroAEsquerda(getSeg(getCurrentDate()))}`
    }

    showDate();
} 

date();