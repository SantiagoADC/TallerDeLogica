let Pmenu = document.querySelector("#vermenu")

let menu = [
    { nombre: "Pizza", precio: 20 },
    { nombre: "Hamburguesa", precio: 10 },
    { nombre: "Sushi", precio: 15 }
  ];
  
let opcioncliente = []

  Pmenu.addEventListener("click", (e) => {
    menu.forEach(element => {
        document.querySelector("#menupepe").innerHTML += `${element.nombre}`
        
});
})










// let Pmenu = document.querySelector("#vermenu")

// let menu = [
//     { nombre: "Pizza", precio: 20 },
//     { nombre: "Hamburguesa", precio: 10 },
//     { nombre: "Sushi", precio: 15 }
//   ];
  
// let opcioncliente = []

//   Pmenu.addEventListener("click", (e) => {
//     menu.forEach(element => {
//         document.querySelector("#menupepe").innerHTML += `${element.nombre}`        
// });
// })