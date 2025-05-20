// calcular imc
const estatura = document.getElementById("estatura");
const peso = document.getElementById("peso");
boton = document.getElementById("btn");

boton.addEventListener("click", () => {
  let est = parseFloat(estatura.value);
  let pes = parseFloat(peso.value);
  let IMC = pes / (est * 2);
  alert(`su indice de masa corporal es de: ${IMC}`);
});
