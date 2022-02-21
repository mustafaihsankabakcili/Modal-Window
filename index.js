'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close_modal')
const openModalButtons = document.querySelectorAll('.show_modal');

// To show modal remove hidden class from overlay and modal
const openModal = function() {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

// To hide modal add hidden class to overlay and modal
const closeModal = function() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

// Adding EventListener to our document (click event)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('show_modal')) {
        openModal();
    }

    if (e.target.classList.contains('close_modal') || e.target.classList.contains('overlay')) {
        closeModal();
    }
});

// Adding EventListener to our document (keypress event)
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});