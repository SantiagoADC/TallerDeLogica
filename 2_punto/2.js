let paroimpar = document.querySelector ("#punto2")
paroimpar.addEventListener ("submit", (e) => {
   e.preventDefault ()
  let minumero = e.target.digitousuario.value
  if (minumero % 2  == 0) {
   alert("su número es de tipo par")
  }else[
   alert("su número es impar")
  ]
})