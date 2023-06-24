// ------------------------scrips del intro-----------------

const intro = document.querySelector(".intro");
const nombre = document.querySelector(".nombre");
const letra__nombre = document.querySelectorAll(".letra__nombre");

window.addEventListener("DOMContentLoaded", () => {
  letra__nombre.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("active");
    }, (index + 1) * 150);
  });
  setTimeout(() => {
    letra__nombre.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove("active");
        span.classList.add("fade");
      }, (span + 1) * 70);
    });
  }, 2600);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2300);
});
//---------dark-mode------
const icon__darkmode= document.getElementById('icon__darkmode');

icon__darkmode.addEventListener('click',()=>{
 document.body.classList.toggle('modoOscuro');
 if(document.body.classList.contains('modoOscuro')){
  icon__darkmode.src='./img/imgTemaDark/sun.png';
  document.querySelector('.darkmode__text').textContent='Clear Mode';
 }else{
  icon__darkmode.src='./img/imgTemaDark/moon.png';
  document.querySelector('.darkmode__text').textContent='Dark Mode';
 }
})
//  ---------------------typed Js---------------------

let typed = new Typed(".home-content span", {
  strings: ["Frontend Developer", "Javascript", "React"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// MENU DE NAVEGACIÓN CREADO DINAMICAMENTE
//  Esta estructura fue creada con un template,fragment,array de objetos, (que tambien podria ser una API) y clone
// a pesar de que es mucho codigo JS para solo 5 items de menu
// tambien se podria emplear para 20.000 items, productos  en un  e-commerce,por ejemplo, y cumpliria la misma
// funcion ya que no se renderiza en el navegador, evitando el reflow y mejorando el rendimiento
// de carga
const items = [
  {
    irA: "#home",
    url: "./img/imgMenu/home.svg",
    nombreItem: "Inicio",
  },
  {
    irA: "#about",
    url: "./img/imgMenu/user.svg",
    nombreItem: "About",
  },
  {
    irA: "#skills",
    url: "./img/imgMenu/code.svg",
    nombreItem: "Skills",
  },
  {
    irA: "#portfolio",
    url: "./img/imgMenu/portfolio.svg",
    nombreItem: "Portfolio",
  },
  {
    irA: "#contact",
    url: "./img/imgMenu/contact.svg",
    nombreItem: "Contact",
  }
];

console.log(items)
const navbar__vertical = document.querySelector(".navbar__vertical");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();

items.forEach((item) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".text__link").textContent = item.nombreItem;
  clone.querySelector(".icono").src = item.url;
  clone.querySelector(".enlace").href = item.irA;
  fragment.appendChild(clone);
});

 console.log(navbar__vertical.appendChild(fragment)) 

//  Menu de Navegación Responsivo que se abre y se cierra automaticamente-----------------------
const open = document.querySelector(".open");
const navbarVertical = document.querySelector(".navbar__vertical");
open.addEventListener("click", () => {
  navbarVertical.classList.toggle("spread");
});
window.addEventListener("click", (e) => {
  if (
    navbarVertical.classList.contains("spread") &&
    e.target != navbarVertical &&
    e.target != open
  ) {
    navbarVertical.classList.toggle("spread");
  }
});

//-----------------------Boton que muestra mas informacion sobre mi, se cierra y se abre al darle click---------------------------------

const btnMore = document.querySelector("button");
const mostar = document.querySelector(".about-content #mostrar");

let click_ = 1;
btnMore.addEventListener("click", () => {
  if (click_ % 2 === 0) {
    btnMore.textContent = "+";
    mostrar.textContent = "";
    click_++;
  } else {
    mostrar.textContent =
      " \"  I'm the type of person... if you ask me a question and I don't know the answer, I'm going to tell you that I don't know. But I bet you what. I know how to find the answer, and I will find the answer. \"";
    btnMore.textContent = "-";

    click_++;
  }
});
