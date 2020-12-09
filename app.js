const menuToggle = document.querySelectorAll('.menu-toggle');
const menu = document.querySelector('.menu');
const subscribeContainer = document.querySelector('.subscribe-container');
const closeForm = document.querySelectorAll('.close-form');
const openPopup = document.querySelector('.open-popup');
const subscribeForm = document.querySelector('.subscribe-form');
const formContainer = document.querySelector('.form-container');
const thanks = document.querySelector('.thanks');

const showHideMenu = () => {
    menu.classList.toggle('hide-nav');
    for (icon of menuToggle) {
        icon.classList.toggle('hide-item');
    }
}

const hideForm = () => {
    subscribeContainer.classList.add('hide-item');
}

const showForm = () => {
    subscribeContainer.classList.remove('hide-item');
}

const submitThanks = (e) => {
    e.preventDefault();
    console.log('clicked');
    formContainer.classList.add('hide-item');
    thanks.classList.remove('hide-item');
}

for (icon of menuToggle) {
    icon.addEventListener('click', showHideMenu);
}


for (closeItem of closeForm) {
    closeItem.addEventListener('click', hideForm);
}

openPopup.addEventListener('click', showForm);

subscribeForm.addEventListener('submit', submitThanks);