const selectNome = document.querySelector('#name');
const btnGenerate = document.querySelector('.btn-generate');
const result = document.querySelector('.result');
const firstNameBank = [
    {
        gender: 'm',
        firstName: ['Diogo', 'Breno', 'Xande', 'Marcos', 'Pedro']
    },
    {
        gender: 'f',
        firstName: ['Luana', 'Zete', 'Beatriz', 'Isa', 'Bianca']
    }
];
const lastNameBank = ['Souza', 'Santos', 'Silva', 'França', 'Ferreira'];

let contador = 1;

btnGenerate.addEventListener('click', () => {


    if(!selectNome.value) {
        alert('Escolha um personagem, porfavor!');
        result.innerText = '';
    }

    const firstName = generateFullName(selectNome.value);
    const lastName = generateLastName();

    for(let objFirstName of firstNameBank) {
        if(objFirstName.gender === selectNome.value) {
            let i = 0;
            while(i < contador) {
                let firstNameValue = firstName.next().value;
                let lastNameValue = lastName.next().value;

                if(!firstNameValue) {
                    console.log('Terminou');
                    i = 0;
                    contador = 1;
                    return;
                } else {
                    result.innerText = firstNameValue + " " + lastNameValue;
                    i++;
                }
            }
        }
    }

    contador++;
}); 

function* generateFullName(gender) {
    for(let objFirstName of firstNameBank) {
        if(objFirstName.gender === gender) {
            for(let firstName of objFirstName.firstName) {
                yield firstName;
            }
        }
    }
}

function* generateLastName() {
    for(let lastName of lastNameBank) {
        yield lastName;
    }
}