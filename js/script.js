const writeUsBtn = document.querySelector('.button_write-us');
const closeModalBtns = document.querySelectorAll('.modal__close');
const buyBtns = document.querySelectorAll('.goods__action-item_buy-button');
const successMsg = document.querySelector('.modal_success-popup');
const openMap = document.querySelector('.show-map');
const map = document.querySelector('.map');
const nameInput = document.querySelector('.modal__name input');
const modal = document.querySelector('.modal');

openMap.addEventListener('click', function(evt){
    evt.preventDefault();
    showMap();
});

for( button of closeModalBtns ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        if(map.classList.contains('active')){
            hideMap();
        } else if(modal.classList.contains('active')){
            hideModal();
        } else if(successMsg.classList.contains('active')){
            hideSuccessMsg();
        }
    });
}

for( button of buyBtns ){
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        showSuccessMsg();
    });
}

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        if( map.classList.contains('active') ){
            evt.preventDefault();
            hideMap();
        } else if (modal.classList.contains('active')){
            evt.preventDefault();
            hideModal();
        } else if(successMsg.classList.contains('active')) {
            evt.preventDefault();
            hideSuccessMsg();
        }
    }
});

writeUsBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    showModal();
});

function showMap(){
    map.classList.add('active');
}

function hideMap(){
    map.classList.remove('active');
}

function showModal(){
    modal.classList.add('active');
    nameInput.focus();
}

function hideModal(){
    modal.classList.remove('active');
}

function showSuccessMsg(){
    successMsg.classList.add('active');
}

function hideSuccessMsg(){
    successMsg.classList.remove('active');
}
// промо секция слайдер

const nextBtn = document.querySelector('.promo-section__slider-next-btn');
const prvBtn = document.querySelector('.promo-section__slider-prv-btn');
let slides = document.getElementsByClassName('promo-section__slider-item');
let dotsList = document.querySelector('.promo-section__slider-bredcrumbs');
let dots = document.getElementsByClassName('promo-section__slider-bredcrumbs__item');
let i = 0;

populateSliderBredcrumbs();

function populateSliderBredcrumbs(){
    for( let i = 0; i < slides.length; i++ ){
        let dot = document.createElement('li');
        dot.setAttribute('class', 'promo-section__slider-bredcrumbs__item');
        dot.addEventListener('click', function(evt){
            evt.preventDefault();
            changeNxtSlide();
        })
        dotsList.appendChild(dot);
    }
    dots[0].classList.add('active');
}

nextBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    changeNxtSlide();
});
prvBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    changePrvSlide();
});


function changePrvSlide(){
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
    i--;
    if( i < 0 ){
        i = slides.length - 1;
    }
    slides[i].classList.add('active');
    dots[i].classList.add('active');
};

function changeNxtSlide(){
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
    i++;
    if( i >= slides.length ){
        i = 0;
    }
    slides[i].classList.add( 'active' );
    dots[i].classList.add('active');

}

// сервисы слайдер

const servicesBtnList = document.querySelector('.services__navigation-list');
let servicesBtns = document.getElementsByClassName('services__navigation-list-item');
let servicesActions = document.getElementsByClassName('services__navigation-list-button');
let servicesSlides = document.getElementsByClassName('services__list-item');

servicesBtnList.addEventListener('click', function(evt){
    evt.preventDefault();
    for(let i = 0; i < servicesBtns.length; i++){
        servicesSlides[i].classList.remove('active');
        servicesBtns[i].classList.remove('active');
        if( evt.target && evt.target === servicesActions[i] ){
            servicesSlides[i].classList.add('active');
            servicesBtns[i].classList.add('active');
        }
    }

});