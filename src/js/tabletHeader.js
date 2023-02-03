const wholeHeader = document.getElementById('header');
const burgerButton = document.getElementById('tabletBurger');
const tabletHeader = document.getElementById('tablet');
const tabletBurger = document.getElementById('tabletBurgerIcon');
const tabletCross = document.getElementById('tabletCrossIcon');

tabletCross.style.display = 'none';

window.addEventListener('click', (event) => {
  if (!wholeHeader.contains(event.target) && tabletHeader.getAttribute('data-header') === 'opened') {
    tabletHeader.setAttribute('data-header', 'closed');
    document.body.style.overflow = 'scroll'
    tabletHeader.style.height = '96px';
    document.querySelectorAll('section').forEach (el => {
      el.style.removeProperty('filter');
    })

    if ((pageYOffset / 100) < 1) {
     wholeHeader.style.backgroundColor =  `rgba(28, 37, 44, ${pageYOffset / 100})`;
    } else {
      wholeHeader.style.backgroundColor =  'rgba(28, 37, 44, 1)';
    }
  };
})

burgerButton.addEventListener('click', () => {
  if (tabletHeader.getAttribute('data-header') === 'closed') {
    tabletHeader.setAttribute('data-header', 'opened');
    document.body.style.overflow = 'hidden';
    tabletHeader.style.height = '192px'
    wholeHeader.style.backgroundColor = '#1b242b';
    tabletBurger.style.display = 'none';
    tabletCross.style.display = 'block';
    document.querySelectorAll('section').forEach (el => {
      el.style.filter = 'brightness(0.4)';
    })
  } else {
    tabletHeader.setAttribute('data-header', 'closed');
    document.body.style.overflow = 'scroll'
    tabletHeader.style.height = '96px';
    tabletBurger.style.display = 'block';
    tabletCross.style.display = 'none';
    document.querySelectorAll('section').forEach (el => {
      el.style.removeProperty('filter');
    })

    if ((pageYOffset / 100) < 1) {
     wholeHeader.style.backgroundColor =  `rgba(28, 37, 44, ${pageYOffset / 100})`;
    } else {
      wholeHeader.style.backgroundColor =  'rgba(28, 37, 44, 1)';
    }
  };
});