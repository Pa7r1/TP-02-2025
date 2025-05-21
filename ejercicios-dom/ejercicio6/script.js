const formulario = document.getElementById("formulario");
const error = document.getElementById("error");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();

  //almaceno errores
  let errores = [];

  //verificaciones
  if (nombre == "" || nombre.length > 50) {
    errores.push("el nombre no puede estar vacio ni superar 50 caracteres");
  }
  if (apellido == "" || apellido.length > 50) {
    errores.push("el apellido no puede estar vacio ni superar 50 caracteres");
  }

  if (isNaN(edad) || edad < 0) {
    errores.push("La edad no puede ser negativa");
  } else if (edad < 18) {
    errores.push("No puede ser menor de edad");
  }

  if (isNaN(altura) || altura < 1 || altura > 230) {
    errores.push("La altura debe estar entre 1 y 230 cm");
  }

  if (correo == "" || !correo.includes("@")) {
    errores.push("El correo no puede estar vacio y debe contener @ ");
  }

  //muestro mensajes
  if (errores.length === 0) {
    error.innerHTML = "Datos validos";
    error.className = "bien";
  } else {
    error.innerHTML = errores.join("<br>");
    error.className = "error";
  }
});
