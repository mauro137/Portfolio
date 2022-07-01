const btnEnviar = document.querySelector(".form__btn__enviar");
const nombre = document.getElementById("form__nombre");
const correo = document.getElementById("form__email");
const asunto = document.getElementById("form__asunto");
const mensaje = document.getElementById("form__mensaje");
const formulario = document.getElementById("contacto__form");
btnEnviar.disabled = true;

formulario.addEventListener("keyup", formControl);
btnEnviar.addEventListener("click", formValidation);

function formControl() {
  if (
    nombre.value.length > 0 &&
    correo.value.length > 0 &&
    asunto.value.length > 0 &&
    mensaje.value.length > 0
  ) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

function formValidation() {
  if (condition) {
    if (condition) {
    } else {
    }
  }
}
