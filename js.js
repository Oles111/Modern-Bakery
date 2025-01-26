// const popupLinks = document.querySelectorAll('.open-popup');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 300;

const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnOpen1 = document.querySelector('.modal-btn-open1');
const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');
const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpen1.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);



