const modal = document.getElementById('modal')
const modalCloser = document.getElementById('modal-close');

const modalOpener = document.querySelectorAll('.modalOpener');

modalCloser.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'scroll';
});

modalOpener.forEach(el => {
  el.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});
