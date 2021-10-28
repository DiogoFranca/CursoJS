const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const btnSignUp = document.querySelector('.btn-signup');
const dataBase = [];

btnSignUp.addEventListener('click', e => {
    e.preventDefault();

    if(!inputUsername.value || !inputPassword.value) return;

    const registration = signUpPerson(inputUsername.value, inputPassword.value);

    dataBase.push(registration);
    cleanInput();
    alert('Usuário cadastrado com sucesso!');
    saveUser(dataBase);
    changePageForLogin();
}); 

function signUpPerson(username, password) {
    return {
        username: username,
        passoword: password
    }
}

function cleanInput() {
    inputUsername.value = '';
    inputPassword.value = '';
}

function saveUser(ArrayUsers) {
    const usersJSON = JSON.stringify(ArrayUsers);
    localStorage.setItem('users', usersJSON);
}

function changePageForLogin() {
    location.href = 'login.html';
}
