let sumanumeros = document.querySelector("#punto1")
let suma = 0

sumanumeros.addEventListener("submit", (e) => {
    e.preventDefault()
    minumero = e.target.digitousuario.value
    for (let sumatoria = 1; sumatoria <= minumero; sumatoria++) {
        suma = suma + sumatoria;
        console.log("La sumatoria desde el 1 hasta tu número: " + minumero + " es igual a= "+ suma)
    }
})



/*
let suma = 0;
let continuar = true;

while (continuar) {
  const numero = parseFloat(prompt("Ingresa un número (o presiona Cancelar para detener):"));

  if (!isNaN(numero)) {
    suma += numero;
  } else {
    continuar = false;
  }
}

console.log("La suma total es: " + suma); */