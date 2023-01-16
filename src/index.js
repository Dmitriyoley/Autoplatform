window.addEventListener('scroll', function() {
  const header = document.getElementById('header');

  if ((pageYOffset / 100) < 1) {
    header.style.backgroundColor =  `rgba(28, 37, 44, ${pageYOffset / 100})`;
  } else {
    header.style.backgroundColor =  'rgba(28, 37, 44, 1)';
  }
});

window.addEventListener('load', () => {
  header.style.backgroundColor =  'rgba(28, 37, 44, 1)';
});

function heroSlider() {
  const slideContainer = document.querySelector('.hero__container');
  const buttonPrev = document.querySelector('.button__left');
  const buttonNext = document.querySelector('.button__right');
  const slide = document.querySelector('.hero__slides');
  const interval = 3000;


  let slides = document.querySelectorAll('.hero__slide');
  let index = 1;
  let slideId;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  console.log(slides, slide)

  slide.append(firstClone);
  slide.prepend(lastClone);

  const slideWidth = slides[index].clientWidth;

  slide.style.transform = `translateX(${-slideWidth * index}px)`;

  console.log(slides);

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };

  const getSlides = () => document.querySelectorAll('.hero__slide');

  slide.addEventListener('transitionend', () => {
  slides = getSlides();
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
  buttonNext.addEventListener('click', moveToNextSlide);
  buttonPrev.addEventListener('click', moveToPreviousSlide);

  startSlide();
}

heroSlider();

function brandsSlider () {
  const brandsGallery = document.getElementById('brandsGallery');
  const brandsSlide = document.getElementById('brandsSlide');
  const slides = brandsSlide.getElementsByClassName('brands__logo');
  const slideWidth = document.getElementsByClassName('brands__logo')[0].offsetWidth;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = i * slideWidth + 'px';
  }

  setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
      const styleOfFirstElement = parseInt(slides[i].style.left);
      const isLessThenZero = (styleOfFirstElement < 0);
      slides[i].style.left = styleOfFirstElement - slideWidth + 'px';

      if(isLessThenZero) {
        slides[i].style.visibility = 'hidden';
        slides[i].style.left = ((slides.length - 2) * slideWidth) + 'px';
      } else if (slides[i].style.visibility !== 'visible'){
        slides[i].style.visibility = 'visible';
      }
    }
  }, 3000);
}



brandsSlider();