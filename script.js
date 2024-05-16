// let popup = document.getElementById('popup')

function onSubmit() {
  // popup.classList.add('open-popup')
}

// function closePopup(){
//   document.getElementById("form").reset();
//   popup.classList.remove('open-popup')
// }

// Event listener for form validation
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(emailInput.value)) {
      emailInput.setCustomValidity('Introduzca un email válido');
    } 
    emailInput.reportValidity();

    email.checkValidity() ? email.classList.remove('input-invalid') :
      email.classList.add('input-invalid');
  });

  phoneInput.addEventListener('input', () => {
    phoneInput.setCustomValidity('');
    const phoneRegex = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;

    if(!phoneRegex.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Introduzca un número de télefono válido');
    }
    phoneInput.reportValidity();

    phoneInput.checkValidity() ? phoneInput.classList.remove('input-invalid') :
      phoneInput.classList.add('input-invalid');
  });

});