const imagenes = [
  "Images/New Ones/1677653430458.jpg",
  "Images/New Ones/1677653662862.jpg",
  "Images/New Ones/1677653914062.jpg",
  "Images/New Ones/1677654339347.jpg",
  "Images/New Ones/1677654507728.jpg",
  "Images/New Ones/1677656541439.jpg",
  "Images/New Ones/1677656651056.jpg",
  "Images/New Ones/1677656727198.jpg",
  "Images/New Ones/1677656765908.jpg",
  "Images/New Ones/1677656802105.jpg",
  "Images/New Ones/1677656869362.jpg",
  "Images/New Ones/1677656922646.jpg",
  "Images/New Ones/1677656979722.jpg",
  "Images/New Ones/1677657042094.jpg",
  "Images/New Ones/1677657089078.jpg",
  "Images/New Ones/1677657273607.jpg",
  "Images/New Ones/1677657311403.jpg",
  "Images/New Ones/1677657434516.jpg",
  "Images/New Ones/1677657495869.jpg",
  "Images/New Ones/1677657842126.jpg",
  "Images/New Ones/1677657924052.jpg",
  "Images/New Ones/1677657981144.jpg",
  "Images/New Ones/1677658078226.jpg",
  "Images/New Ones/1677663789491.jpg",
  "Images/New Ones/1677663942903.jpg",
  "Images/New Ones/1677664082465.jpg",
  "Images/New Ones/1677664188843.jpg",
  "Images/New Ones/1677664301810.jpg",
  "Images/New Ones/1677664394242.jpg",
  "Images/New Ones/1677664810750.jpg",
  "Images/New Ones/1677665800952.jpg",
  "Images/New Ones/1677666018673.jpg",
  "Images/New Ones/1677823584055.jpg",
  "Images/New Ones/1677823781102.jpg",
  "Images/New Ones/1677823841763.jpg",
  "Images/New Ones/1677824092517.jpg",
  "Images/New Ones/1677825870885.jpg",
  "Images/New Ones/1677826520541.jpg",
  "Images/New Ones/1677826999406.jpg",
  "Images/New Ones/1677827083849.jpg",
  "Images/New Ones/1677827328303.jpg",
];

function crearElemento(tag, props, parent) {
  const element = document.createElement(tag);
  if (typeof props === 'object') {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        element[key] = props[key];
      }
    }
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

const grid = document.querySelector(".grid");

window.onload = () => {
  setTimeout(() => {
    let body = document.querySelector("body");
    body.removeAttribute("data-aos");
  }, 1000);
}

imagenes.forEach((imagen) => {
  const img = crearElemento('img', { src: imagen, alt: 'imagen', className: 'imagen', 'data-src': imagen }, grid);
  img.setAttribute('data-aos', 'fade-up');
  img.addEventListener('click', () => {
    const overlay = crearElemento('div', { className: 'overlay' }, document.body);
    const imgGrande = crearElemento('img', { src: imagen, alt: 'imagen', className: 'img-grande' }, overlay);
    const botonCerrar = crearElemento('button', { innerHTML: 'Cerrar', className: 'boton-cerrar' }, overlay);
    imgGrande.style.pointerEvents = 'none';
    botonCerrar.addEventListener('click', () => {
      imgGrande.style.transform = "scale(0.01)"
      imgGrande.style.transition = "0.2s ease";
      setTimeout(() => {
        overlay.remove();
      }, 200);
    });
  });
});

