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
      slides[i].addEventListener('transitionstart', () => {
        slides[i].style.visibility = 'hidden';
      });
      slides[i].addEventListener('transitionend', () => {
        slides[i].style.visibility = 'visible';
        slides[i].replaceWith(slides[i].cloneNode(true));
      });
      slides[i].style.left = ((slides.length - 2) * slideWidth) + 'px';
    }
  }
}, 3000)
