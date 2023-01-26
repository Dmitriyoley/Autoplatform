const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('focus', () => {
  phoneInput.value = '+38  (';
});

document.onkeydown = function (e) {
  console.log('key down');
  console.log(e);
};

//phoneInput.addEventListener('input', () => {
//  if (phoneInput.value.length === 9) {
//    phoneInput.value += ') ';
//  }
//
//  if (phoneInput.value.length === 14) {
//    phoneInput.value += ' - '
//  }
//
//  if (phoneInput.value.length === 19) {
//    phoneInput.value += ' - '
//  }
//});

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