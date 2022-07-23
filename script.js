// entras

const caja1 = document.getElementById('animado');
const caja2 = document.getElementById('animado2');
const caja3 = document.getElementById('animado3');
// const caja4 = document.getElementById('hability');
// const caja5 = document.getElementById('content-all');
// const caja6 = document.getElementById('contact');

// const caja7 = document.getElementById('web');
// const caja8 = document.getElementById('node');


const cargarcaja = (entradas, observador) => {

    entradas.forEach((entrada) => {
      if(entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      } else {
        entrada.target.classList.remove('visible');
      }
    });
}


const observador = new IntersectionObserver(cargarcaja, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 1.0
});

observador.observe(caja1);
observador.observe(caja2);
observador.observe(caja3);
// observador.observe(caja4);
// observador.observe(caja5);
// observador.observe(caja6);



// const cargarcaja2 = (entradas, observador) => {

//     entradas.forEach((entrada) => {
//       if(entrada.isIntersecting) {
//         entrada.target.classList.add('growing');
//       } else {
//         entrada.target.classList.remove('growing');
//       }
//     });
// }

// const observador2 = new IntersectionObserver(cargarcaja2, {
//   root: null,
//   rootMargin: '0px 0px 0px 0px',
//   threshold: 1.0
// });

// observador2.observe(caja7);
// observador2.observe(caja8);






//  OPEN MENU-BAR

let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

menu_bar.addEventListener("click", function () {
  menu.classList.toggle("menu-toggle");
});


// SHOPPING SECTION
