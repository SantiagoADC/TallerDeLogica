 let tablam = document.querySelector ("#punto2")
 let total = 0

 tablam.addEventListener ("submit", (e) => {
    e.preventDefault ()
   let minumero = e.target.digitousuario.value
   for (let i = 1; i <= 10; i++) {
           let resultado = minumero * i;
           total += resultado;
           console.log(`${minumero} x ${i} = ${resultado}`);
       }
 })


// alert(minumero x  i = resultado)