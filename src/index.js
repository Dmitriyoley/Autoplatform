window.addEventListener('scroll', function() {
  const header = document.getElementById('header');

  if ((pageYOffset / 100) < 1) {
    header.style.backgroundColor =  `rgba(28, 37, 44, ${pageYOffset / 100})`;
  } else {
    header.style.backgroundColor =  'rgba(28, 37, 44, 1)';
  }
});

window.addEventListener('onresize', () => {
  console.log(123)
});

const map = document.getElementById('adressMap');
map.width = '100%';

function heroSlider() {
  const slideContainer = document.querySelector('.hero__container');
  const buttonPrev = document.querySelector('.button__left');
  const buttonNext = document.querySelector('.button__right');
  const slide = document.querySelector('.hero__slides');
  const interval = 5000;


  let slides = document.querySelectorAll('.hero__slide');
  let index = 1;
  let slideId;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slide.append(firstClone);
  slide.prepend(lastClone);

  const slideWidth = slides[index].clientWidth;

  slide.style.transform = `translateX(${-slideWidth * index}px)`;

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };

  const getSlides = () => document.querySelectorAll('.hero__slide');

  slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (index === 0) {
    document.getElementById(`pagination5`).style = true;
  } else if (index === 6) {
    document.getElementById(`pagination1`).checked = true;
  } else if (index !== 0) {
    document.getElementById(`pagination${index}`).checked = true;
  }
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

  const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

  slideContainer.addEventListener('mouseleave', startSlide);
  buttonNext.addEventListener('click', function() {
    moveToNextSlide();
    clearInterval(slideId);
  });
  buttonPrev.addEventListener('click', function() {
    moveToPreviousSlide();
    clearInterval(slideId);
  });
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      startSlide();
    } else {
      clearInterval(slideId)
    }
  });

  startSlide();
}

heroSlider();

function brandsSlider() {
  setInterval(() => {

  }, )
  const brandContainer = document.getElementById('brandsGallery');
  const brandsSlide = document.getElementById('brandsSlide');
  let brandsSlideCopy = document.getElementById('slideCopy');

  if (brandsSlideCopy === null) {
    brandsSlideCopy = brandsSlide.cloneNode(true);
    brandsSlideCopy.id = 'slideCopy';
    brandContainer.appendChild(brandsSlideCopy);
  }



  brandContainer.style.animationDuration = `${brandsSlide.childElementCount * 3}s`

}

brandsSlider()