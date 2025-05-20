const alturaIzquierda = document.getElementById("izquierda");
const alturaDerecha = document.getElementById("derecha");
const largoBase = document.getElementById("base");
const boton = document.getElementById("btn");
const parrafo = document.getElementById("texto");

boton.addEventListener("click", () => {
  let izquierda = parseFloat(alturaIzquierda.value);
  let derecha = parseFloat(alturaDerecha.value);
  let base = parseFloat(largoBase.value);
  let area = base * derecha + (1 / 2) * base * (izquierda - derecha);

  parrafo.innerHTML = `El area de la figura es de ${area} metros cuadrados`;
});
