window.addEventListener('scroll', function() {
  const header = document.getElementById('header');

  if ((pageYOffset / 100) < 1) {
    header.style.backgroundColor =  `rgba(28, 37, 44, ${pageYOffset / 100})`;
  } else {
    header.style.backgroundColor =  'rgba(28, 37, 44, 1)';
  }
});