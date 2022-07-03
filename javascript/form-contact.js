const formulario = document.getElementById("contacto__form");
const inputs = document.querySelectorAll("#contacto__form input");
const textarea = document.querySelector("#mensaje__box");
const btnEnviar = document.querySelector(".form__btn__enviar");
btnEnviar.disabled = true;
const boxNombre = document.getElementsByClassName("nombre__box");
const nombre = document.getElementById("form__nombre");
const correo = document.getElementById("form__email");
const asunto = document.getElementById("form__asunto");
const mensaje = document.getElementById("form__mensaje");

const expresiones = {
  nombre_asunto: /^([A-Za-z]){1,50}$/,
  email:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  mensaje: /^([A-Za-z]){1,300}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "form__nombre":
      validarCampo(expresiones.nombre_asunto, e.target, "nombre");
      break;
    case "form__email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "form__asunto":
      validarCampo(expresiones.nombre_asunto, e.target, "asunto");
      break;
    case "form__mensaje":
      validarArea(expresiones.mensaje, e.target, "mensaje");
      break;
  }
};

/* EVENTOS DE LOS ELEMENTOS DEL FORMULARIO PARA LA VALIDACION*/

const validarArea = (expresion,  textarea, campo) => {
  if (expresion.test(textarea.value)) {
    document
      .getElementById(`${campo}__box`)
      .classList.remove("formulario__incorrecto");
  } else {
    document
      .getElementById(`${campo}__box`)
      .classList.add("formulario__incorrecto");
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`${campo}__box`)
      .classList.remove("formulario__incorrecto");
  } else {
    document
      .getElementById(`${campo}__box`)
      .classList.add("formulario__incorrecto");
  }
};
textarea.addEventListener("keyup", validarFormulario);
textarea.addEventListener("blur", validarFormulario);

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

/* Control del boton enviar */
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formulario.addEventListener("keyup", formControl);

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
