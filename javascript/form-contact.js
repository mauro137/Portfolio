const formulario = document.getElementById("contacto__form");
const inputs = document.querySelectorAll("#contacto__form input, textarea");
const textarea = document.querySelector("#mensaje__box");
const btnEnviar = document.querySelector(".form__btn__enviar");
btnEnviar.disabled = true;
const boxNombre = document.getElementsByClassName("nombre__box");
const nombre = document.getElementById("form__nombre");
const correo = document.getElementById("form__email");
const asunto = document.getElementById("form__asunto");
const mensaje = document.getElementById("form__mensaje");

const expresiones = {
  nombre: /^([A-Za-z]){1,50}$/,
  asunto: /^([A-Za-z0-9$!#?%=-]){1,50}$/,
  email:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  mensaje: /^([A-Za-z0-9!#%$+-?=*&".,]){1,300}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "form__nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "form__email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "form__asunto":
      validarCampo(expresiones.asunto, e.target, "asunto");
      break;
    case "form__mensaje":
      validarCampo(expresiones.mensaje, e.target, "mensaje");
      break;
  }
};
/* EVENTOS DE LOS ELEMENTOS DEL FORMULARIO PARA LA VALIDACION, SE USA TEMPLATE STRING PARA AHORRAR CODIGO Y DINAMIZAR*/

const validarCampo = (expresion, input, campo) => {
  let campoBox = document.getElementById(`${campo}__box`);
  let grupoBox = document.querySelector(`#${campo}__grupo .input__error`);
  if (expresion.test(input.value)) {
    campoBox.classList.remove("formulario__incorrecto");
    grupoBox.classList.remove("input__error-mostrar");
    campoBox.classList.add("formulario__correcto");
  } else {
    campoBox.classList.remove("formulario__correcto");
    grupoBox.classList.add("input__error-mostrar");
    campoBox.classList.add("formulario__incorrecto");
  }
};
textarea.addEventListener("keyup", validarFormulario);
textarea.addEventListener("blur", validarFormulario);

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});


/* controla que los campos esten completos y activa/desactiva el btn de envio de forma dinamica */

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

/* reset del formulario y los estilos*/
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  formulario.reset();

document.querySelector(".form__enviado").classList.add("form__enviado-visible")
  setTimeout(() => {
    document.querySelector(".form__enviado").classList.remove("form__enviado-visible")
  }, 5000);

  document.querySelectorAll(".formulario__correcto").forEach((campo_valido) => {
    campo_valido.classList.remove("formulario__correcto");
  });
});