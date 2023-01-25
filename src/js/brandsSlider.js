function brandsSlider() {
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

brandsSlider();