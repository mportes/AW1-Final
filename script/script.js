const botao = document.getElementById('botao');
const closeButton = document.getElementById('closeButton');
const popup = document.getElementById('popup');

function toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('active');
}

function closePopup() {
    popup.classList.add('closed');
}

botao.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closePopup);