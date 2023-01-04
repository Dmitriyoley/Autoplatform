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

document.addEventListener('load', brandsSlider());
