const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', e => {
    e.preventDefault();

    if(!inputUsername.value || !inputPassword.value) alert('Dados Incorretos!');
    const dataBase = getUsers();
    const validUser = validateData(dataBase, inputUsername.value, inputPassword.value);

    if(validUser) {
        changePageForAnimePhotoGallery()
    } else {
        alert('Usuário não cadastrado!');
    }
});

function getUsers() {
    const getUsersJson = localStorage.getItem('users');
    const dataBase = JSON.parse(getUsersJson);
    return dataBase;
}

function validateData(arrayUser, username, password) {
    for(let objUser of arrayUser) {
        if(objUser.username === username && objUser.passoword === password) return true;
        return false; 
    }
}

function changePageForAnimePhotoGallery() {
    location.href = 'anime_photo_gallery.html';
}
