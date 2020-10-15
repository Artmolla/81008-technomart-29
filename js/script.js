const writeUsButton = document.querySelector('.button_write-us');
const closeModalButtonList = document.querySelectorAll('.modal__close');
const modalOpenButtonList = document.querySelectorAll('.goods__action-item_buy-button');
const successMessage = document.querySelector('.modal_success-popup');
const openMap = document.querySelector('.show-map');
const map = document.querySelector('.map');
const nameInput = document.querySelector('.modal__name input');
const modal = document.querySelector('.modal');

openMap.addEventListener('click', function(evt){
    evt.preventDefault();
    showAndHidePopup(map);
});

for( button of closeModalButtonList ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        if(map.classList.contains('active')){
            showAndHidePopup(map);
        } else if(modal.classList.contains('active')){
            showAndHidePopup(modal);
        } else if(successMessage.classList.contains('active')){
            showAndHidePopup(successMessage);
        }
    });
}

for( button of modalOpenButtonList ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
            showAndHidePopup(successMessage);
    });
}

function addOrRemoveWindowListeners(evt){
    if(evt.key === 'Escape'){
        if( map.classList.contains('active') ){
            evt.preventDefault();
            showAndHidePopup(map);
        } else if (modal.classList.contains('active')){
            evt.preventDefault();
            showAndHidePopup(modal);
        } else if(successMessage.classList.contains('active')) {
            evt.preventDefault();
            showAndHidePopup(successMessage);
        }
    }
}

writeUsButton.addEventListener('click', function(evt){
    evt.preventDefault();
    showAndHidePopup(modal);
});
// ####
function showAndHidePopup(popup){
    if( popup.classList.contains('active') ){
        popup.classList.remove('active');
        window.removeEventListener('keydown', addOrRemoveWindowListeners);
    } else {
        popup.classList.add('active');
        window.addEventListener('keydown', addOrRemoveWindowListeners);
    }
}

// промо секция слайдер

const nextButton = document.querySelector('.promo-section__slider-next-btn');
const previousButton = document.querySelector('.promo-section__slider-prv-btn');
let slidesList = document.getElementsByClassName('promo-section__slider-item');
let dotsContainer = document.querySelector('.promo-section__slider-bredcrumbs');
let dotsList = document.getElementsByClassName('promo-section__slider-bredcrumbs__item');
let i = 0;

populateSliderBredcrumbs();

function populateSliderBredcrumbs(){
    for( let i = 0; i < slidesList.length; i++ ){
        let dot = document.createElement('li');
        dot.setAttribute('class', 'promo-section__slider-bredcrumbs__item');
        dot.addEventListener('click', function(evt){
            evt.preventDefault();
            changeToNextSlide();
        })
        dotsContainer.appendChild(dot);
    }
    dotsList[0].classList.add('active');
}

nextButton.addEventListener('click', function(evt){
    evt.preventDefault();
    changeToNextSlide();
});
previousButton.addEventListener('click', function(evt){
    evt.preventDefault();
    changeToPreviousSlide();
});


function changeToPreviousSlide(){
    slidesList[i].classList.remove('active');
    dotsList[i].classList.remove('active');
    i--;
    if( i < 0 ){
        i = slidesList.length - 1;
    }
    slidesList[i].classList.add('active');
    dotsList[i].classList.add('active');
};

function changeToNextSlide(){
    slidesList[i].classList.remove('active');
    dotsList[i].classList.remove('active');
    i++;
    if( i >= slidesList.length ){
        i = 0;
    }
    slidesList[i].classList.add( 'active' );
    dotsList[i].classList.add('active');

}

// сервисы слайдер

const servicesButtonsContainer = document.querySelector('.services__navigation-list');
let servicesButtonsList = document.getElementsByClassName('services__navigation-list-item');
let servicesActionsList = document.getElementsByClassName('services__navigation-list-button');
let servicesSlidesList = document.getElementsByClassName('services__list-item');

servicesButtonsContainer.addEventListener('click', function(evt){
    evt.preventDefault();
    for(let i = 0; i < servicesButtonsList.length; i++){
        servicesSlidesList[i].classList.remove('active');
        servicesButtonsList[i].classList.remove('active');
        if( evt.target && evt.target === servicesActionsList[i] ){
            servicesSlidesList[i].classList.add('active');
            servicesButtonsList[i].classList.add('active');
        }
    }
});