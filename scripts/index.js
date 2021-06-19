const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  crearUsuario();
});

const userEmail = document.querySelector('#email-input').value;
const userPassword = document.querySelector('#password-input').value;
const userLegalAge = document.querySelectorAll('div.radio-container input[name="legalAge"]');
const userTCAgreement = document.querySelector('#tyc-input');

//console.log(userEmail);
//console.log(userPassword);
//console.log(userLegalAge);
//console.log(userTermsAndConditions);

function User(userEmail, userPassword) {
  this.email = userEmail;
  this.password = userPassword;
  this.legalAge = legalAge();
  this.tycAccepted = tCAgreement();
}

function legalAge() {
  let legalAge;
  userLegalAge.forEach(element => {
    if (element.id == 'age_no' && element.checked) {
      legalAge = false;
      alert('Debes ser mayor de edad para registrarte en el sitio.')
    } else {
      legalAge = true;
    };
  });
  return legalAge;
}

function tCAgreement() {
  let tCAgreement;
  if (!userTCAgreement.checked) {
    tCAgreement = false;
    alert('Debes aceptar los TyCs para registrarte en el sitio.');
  } else {
    tCAgreement = true;
  }
  return tCAgreement;
}

function crearUsuario() {
  const user = new User(document.querySelector('#email-input').value, document.querySelector('#password-input').value);
  console.log(user);
}



// Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
// 1. Obtenemos el valor ingresado en el input de email
// 2. Obtenemos los datos ingresados en el input de password
// 3. Obtenemos el valor del input radio
// 4. Obtenemos el valor del input checkbox
// 5. Validamos si el usuario es mayor de edad. Si no, mostramos
// un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
// 6. Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
// un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"

  // 7. Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.

