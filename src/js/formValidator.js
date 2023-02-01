const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('focus', () => {
  phoneInput.value = '+38  (';
});

phoneInput.onkeydown = (e) => {
  if (e.key !== 'Backspace') {
    if (phoneInput.value.length === 9) {
      phoneInput.value += ') ';
    }

    if (phoneInput.value.length === 14) {
      phoneInput.value += ' - '
    }

    if (phoneInput.value.length === 19) {
      phoneInput.value += ' - '
    }
  } else {
    if (phoneInput.value.length === 11) {
      phoneInput.value = phoneInput.value.slice(0, 10);
    }

    if (phoneInput.value.length === 16) {
      phoneInput.value = phoneInput.value.slice(0, 15);
    }
  }
};

function validatePhone() {

}