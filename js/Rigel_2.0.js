//Creación de un arreglo que contiene la dirección de las imagenes.
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

//Esta es una función que crea un nuevo elemento HTML y lo agrega al DOM.
function crearElemento(tag, props, parent) {
    //Creamos un nuevo elemento HTML con el nombre de la etiqueta proporcionada por el usuario.
    const element = document.createElement(tag);
    //Verificamos si se proporcionaron propiedades en forma de objeto.
    if (typeof props === 'object') {
        //Iteramos a través de todas las propiedades.
        for (let key in props) {
            //Solo agregamos las propiedades que son del objeto en sí y no de la clase padre.
            if (props.hasOwnProperty(key)) {
                element[key] = props[key];
            }
        }
    }
    //Agregamos el elemento creado como hijo del elemento padre proporcionado por el usuario.
    if (parent) {
        parent.appendChild(element);
    }
    //Retornamos el elemento creado.
    return element;
}


// Seleccionamos el elemento con la clase "grid" y lo asignamos a la variable "grid".
const grid = document.querySelector(".grid");
// Esperamos a que la página cargue y luego de 1000 milisegundos, removemos el atributo "data-aos" del elemento "body".
window.onload = () => {
    setTimeout(() => {
        let body = document.querySelector("body");
        body.removeAttribute("data-aos");
    }, 1000);
}

// Iterando el array de imágenes.
imagenes.forEach((imagen, posicion) => {
    // Creando un elemento img y estableciendo sus atributos.
    const img = crearElemento('img', {
        src: imagen,
        alt: 'imagen',
        className: 'imagen',
        'data-src': imagen
    }, grid);
    // Estableciendo el atributo "data-aos" en "fade-up" para animación.
    img.setAttribute('data-aos', 'fade-up');
    // Agregando un event listener "click" a la imagen creada.
    img.addEventListener('click', () => {
        // Creando un elemento "div" con la clase "overlay" y lo agregando al "body" del documento.
        const overlay = crearElemento('div', { className: 'overlay' }, document.body);
        // Creando un elemento "img" y estableciendo sus atributos.
        const imgGrande = crearElemento('img', {
            src: imagen,
            alt: 'imagen',
            className: 'img-grande'
        }, overlay);

        //Creando un botón "cerrar" y estableciendo sus atributos.
        const botonCerrar = crearElemento('button', {
            innerHTML: 'Cerrar',
            className: 'boton-cerrar'
        }, overlay);

        //Creación de boton para siguiente elemento.
        const botonSiguiente = crearElemento('button', {
            innerHTML: '>',
            className: 'botonSiguiente'
        }, overlay);

        //Agragando un event listener "click" al botón "siguiente"
        botonSiguiente.addEventListener('click', () => {
            //Incrementamos nuestra poscisión en el array para usar la siguiente imagen.
            posicion++;
            if (posicion > imagenes.length - 1) {
                posicion = 0;
            }
            //Cambiamos el atributo "src" para que se cambien por la siguiente imagen.
            imgGrande.src = imagenes[posicion];
        });

        // Agregando un event listener "click" al botón "cerrar".
        botonCerrar.addEventListener('click', () => {
            // Escalando la imagen grande a 0.01 y estableciendo la duración de la animación en 0.2s.
            imgGrande.style.transform = "scale(0.01)";
            imgGrande.style.transition = "0.2s ease";

            //Escalando el boton de la misma manera que la imagen para dar un efecto más bonito :).
            botonCerrar.style.transform = "scale(0.01)";
            botonCerrar.style.transition = "0.2s ease";

            //El mismo efecto para el elemento "overlay".
            overlay.style.background = "rgba(0, 0, 0, 0.0)";
            overlay.style.transition = "0.5s ease";

            // Borra el overlay después de 200ms.
            setTimeout(() => {
                overlay.remove();
            }, 200);
        });
        // Desactivando la propiedad pointer-events en "imgGrande" para evitar cualquier animación no deseada cuando la imagen este en pantalla completa.
        imgGrande.style.pointerEvents = 'none';
    });
});



//Intento de hacer un carrousel.
//Seleccionando todas las imagenes.
/* const all_images = document.querySelectorAll(".grid img");
let currentImage = 0;
const intervalTime = 3000;
const maxImages = images.length;

const changeImage = () => {
    currentImage++;
    if (currentImage > maxImages - 1) {
        currentImage = 0;
    }
    all_images.forEach(image => image.classList.remove('visible'));
    all_images[currentImage].classList.add('visible');
}

images[currentImage].classList.add('visible'); */

//como puedo saber la posicion de un elemento html en un array al hacer click?