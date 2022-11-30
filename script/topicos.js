const list1 = document.querySelectorAll('.list');
const list2 = document.querySelectorAll('.op');

const botao1 = document.getElementById('botao');
const botao2 = document.getElementById('botao2');

function activeLink() {
    list1.forEach((item) => item.classList.remove('active'));
    list2.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    const classe = "." + this.className.split(' ')[0];
    const list3 = document.querySelectorAll(classe);
    list3[1].classList.add('active');
}

function toggleMenu1() {
    const menu1 = document.getElementsByClassName('menu')[0];
    const menu2 = document.getElementsByClassName('navigation')[0];
    menu1.classList.toggle('active');
    menu2.classList.remove('active');
}

function toggleMenu2() {
    const menu1 = document.getElementsByClassName('menu')[0];
    const menu2 = document.getElementsByClassName('navigation')[0];
    menu2.classList.toggle('active');
    menu1.classList.remove('active');
}

list1.forEach((item) => item.addEventListener('click', activeLink));
list1.forEach((item) => item.addEventListener('click', toggleMenu2));
botao1.addEventListener('click', toggleMenu1);
botao2.addEventListener('click', toggleMenu2);