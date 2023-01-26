const modal = document.getElementById('modal')
const modalCloser = document.getElementById('modal-close');

modalCloser.addEventListener('click', () => {
  modal.remove();
})