const brandsGallery = document.getElementById('brandsGallery');
const brandsSlide = document.getElementById('brandsSlide');
const slides = brandsSlide.getElementsByClassName('brands__logo');
const slideWidth = document.getElementsByClassName('brands__logo')[0].offsetWidth;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = i * slideWidth + 'px';
}

setInterval(() => {
  for (let i = 0; i < slides.length; i++) {
    const lefty = parseInt(slides[i].style.left);
    const isLeftZero = (lefty < 0);
    slides[i].style.left = lefty - slideWidth + 'px';

    if(isLeftZero) {
      slides[i].style.visibility = 'hidden';
      slides[i].style.left = ((slides.length - 2) * slideWidth) + 'px';
    } else {
      slides[i].style.visibility = 'visible';
    }
  }
}, 3000);

/*function slide (items) {
  let posX1 = 0;
  let posX2 = 0;
  let posInitial;
  let posFinal;
  let treshold = 100;
  let slides = items.getElementsByClassName('brands__logo');
  let slidesLength = slides.length;
  let slideSize = items.getElementsByClassName('brands__logo')[0].offsetWidth;
  let index = 0;
  let allowShift = true;

  function shiftSlide() {
    items.classList.add('shifting');

    if(allowShift) {
      const currentShift = parseInt(items.style.left);
      items.style.left = (currentShift - slideSize) + 'px';
      index++;
    }

    allowShift = false;
  }

  items.addEventListener('transitionend', checkIndex);

  function checkIndex () {
    items.classList.remove('shifting');
    if (index === slidesLength) {
      index = 0;
      brandsGallery.removeChild(brandsGallery.children[0]);
      brandsGallery.children[0].style.left = 0 + 'px';
    }
    if (index === 3) {
      const copyOfSlides = brandsGallery.children[0].cloneNode(true);

      brandsGallery.appendChild(copyOfSlides);
      slide(copyOfSlides);
    }

    console.log(index);
    allowShift = true;
  }

  setInterval(() => {
    shiftSlide();
  }, 0)
}

slide(brandsSlide);

*/