const closeModal = document.querySelector('.modal__close');
const buyBtns = document.querySelectorAll('.goods__action-item_buy-button');
const successMsg = document.querySelector('.modal_success-popup');

closeModal.addEventListener('click', function(evt){
    evt.preventDefault();
    if (successMsg.classList.contains('active')){
        console.log('click');
        hideSuccessMsg();
    }
});

for( button of buyBtns ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        showSuccessMsg();
    });
}

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        if (successMsg.classList.contains('active')) {
            evt.preventDefault();
            successMsg.classList.remove('active')
        }
    }
});

function showSuccessMsg(){
    successMsg.classList.add('active');
}

function hideSuccessMsg(){
    successMsg.classList.remove('active');
}