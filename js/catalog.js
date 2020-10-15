const closeModalButton = document.querySelector('.modal__close');
const modalOpenButtonList = document.querySelectorAll('.goods__action-item_buy-button');
const successMessage = document.querySelector('.modal_success-popup');

closeModalButton.addEventListener('click', function(evt){
    evt.preventDefault();
    if (successMessage.classList.contains('active')){
        showAndHidePopup(successMessage);
    }
});

for( button of modalOpenButtonList ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        showAndHidePopup(successMessage);
    });
}

function showAndHidePopup(popup){
    if( popup.classList.contains('active') ){
        popup.classList.remove('active');
        popup.removeEventListener('keydown', addAndRemoveWindowListener);
    } else {
        popup.classList.add('active');
        window.addEventListener('keydown', addAndRemoveWindowListener);
    }
}

function addAndRemoveWindowListener(evt){
    if(evt.key === 'Escape' && successMessage.classList.contains('active')){
            evt.preventDefault();
            showAndHidePopup(successMessage);
            window.removeEventListener('keydown', addAndRemoveWindowListener);
    }
}