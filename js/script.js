(function () {
    const openModalButton = document.querySelectorAll('.button_modal');

    const closeModal = function (modal, buttonClose) {
      modal.forEach((element) => {
        element.classList.remove('modal_active');
      });
      buttonClose.removeEventListener('click', closeModalClickHandler);
      document.removeEventListener('keydown', closeModalKeyPressHandler);
    };
  
    const closeModalKeyPressHandler = function (evt) {
      const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
  
      if (isEscKey) {
        document.querySelectorAll('.modal_active').forEach((element) => {
          element.classList.remove('modal_active');
        });
      }
    };
  
    const closeModalClickHandler = function (evt) {
      evt.preventDefault();
      const modal = document.querySelectorAll('.modal_active');
      const buttonClose = evt.target;
      closeModal(modal, buttonClose);
    };
  
    const openModalClickHandler = function (evt) {
      evt.preventDefault();
      document.querySelector('.modal').classList.add('modal_active');
      if (evt.target.classList.contains('button_modal-form-opener')) {
        document.querySelector('.modal__form').classList.add('modal_active');
        document.querySelector('#modal-name').focus();
      } else if (evt.target.classList.contains('button_modal-map-opener')) {
        document.querySelector('.modal__map').classList.add('modal_active');
      } else {
        document.querySelector('.modal__success-message').classList.add('modal_active');
      }
  
      const modalCloseButton = document.querySelector('.modal__close');
      modalCloseButton.addEventListener('click', closeModalClickHandler);
      document.addEventListener('keydown', closeModalKeyPressHandler);
    };
  
    openModalButton.forEach((button) => {
      button.addEventListener('click', openModalClickHandler);
    });
  }());
  
  // промо секция слайдер
  (function () {
    const nextButton = document.querySelector('.promo-section__slider-next-btn');
    const previousButton = document.querySelector('.promo-section__slider-prv-btn');
    const slidesList = document.getElementsByClassName('promo-section__slider-item');
    const dotsContainer = document.querySelector('.promo-section__slider-breadcrumbs');
    const dotsList = document.getElementsByClassName('promo-section__slider-breadcrumbs__item');
    let i = 0;
    if (nextButton && previousButton) {
      const populateSliderBredcrumbs = function () {
        for (let i = 0; i < slidesList.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('class', 'promo-section__slider-breadcrumbs__item');
          dot.addEventListener('click', (evt) => {
            evt.preventDefault();
            changeToNextSlide();
          });
          dotsContainer.appendChild(dot);
        }
        dotsList[0].classList.add('active');
      };
  
      nextButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        changeToNextSlide();
      });
      previousButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        changeToPreviousSlide();
      });
  
      const changeToPreviousSlide = function () {
        slidesList[i].classList.remove('active');
        dotsList[i].classList.remove('active');
        i--;
        if (i < 0) {
          i = slidesList.length - 1;
        }
        slidesList[i].classList.add('active');
        dotsList[i].classList.add('active');
      };
  
      const changeToNextSlide = function () {
        slidesList[i].classList.remove('active');
        dotsList[i].classList.remove('active');
        i++;
        if (i >= slidesList.length) {
          i = 0;
        }
        slidesList[i].classList.add('active');
        dotsList[i].classList.add('active');
      };
      populateSliderBredcrumbs();
    }
  }());
  
  // сервисы слайдер
  (function(){
    const servicesButtonsContainer = document.querySelector('.services__navigation-list');
    const servicesButtonsList = document.getElementsByClassName('services__navigation-list-item');
    const servicesActionsList = document.getElementsByClassName('services__navigation-list-button');
    const servicesSlidesList = document.getElementsByClassName('services__list-item');
    if (servicesButtonsContainer) {
      servicesButtonsContainer.addEventListener('click', (evt) => {
        evt.preventDefault();
        for (let i = 0; i < servicesButtonsList.length; i++) {
          servicesSlidesList[i].classList.remove('active');
          servicesButtonsList[i].classList.remove('active');
          if (evt.target && evt.target === servicesActionsList[i]) {
            servicesSlidesList[i].classList.add('active');
            servicesButtonsList[i].classList.add('active');
          }
        }
      });
    }
  })()