const selectAnime = document.querySelector('#characters');
const btnGenerate = document.querySelector('.btn-generate');
const result = document.querySelector('.result');
const nameBank = [
    {
        anime: 'Naruto Shippuden',
        characters: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake']
    },
    {
        anime: 'Dragon Ball Z',
        characters: ['Goku', 'Vegeta', 'Bulma', 'Freeza', 'Majin Boo']
    }
];

let contador = 1;

btnGenerate.addEventListener('click', () => {


    if(!selectAnime.value) {
        alert('Escolha um personagem, porfavor!');
        result.innerText = '';
    }

    const anime = generatesCharacter(selectAnime.value);

    for(let objAnime of nameBank) {
        if(objAnime.anime === selectAnime.value) {
            let i = 0;
            while(i < contador) {
                let characterValue = anime.next().value;

                if(!characterValue) {
                    console.log('Terminou');
                    i = 0;
                    contador = 1;
                    return;
                } else {
                    result.innerText = characterValue;
                    i++;
                }
            }
        }
    }

    contador++;
}); 

function* generatesCharacter(anime) {
    for(let objAnime of nameBank) {
        if(objAnime.anime === anime) {
            for(let character of objAnime.characters) {
                yield character;
            }
        }
    }
}