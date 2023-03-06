const imagenes = [
    "Images/Old Ones/578151_adapted_1080x2340.jpg",
    "Images/Old Ones/786111_original_2160x3840.jpg",
    "Images/Old Ones/788215_original_2160x3840.jpg",
    "Images/Old Ones/1662272395709.jpg",
    "Images/Old Ones/1662806453742.jpg",
    "Images/Old Ones/1662807278874.jpg",
    "Images/Old Ones/1662807323263.jpg",
    "Images/Old Ones/1662807562736.jpg",
    "Images/Old Ones/1662807618781.jpg",
    "Images/Old Ones/1662807803685.jpg",
    "Images/Old Ones/1663997516958.jpg",
    "Images/Old Ones/1663997577282.jpg",
    "Images/Old Ones/1663997749921.jpg",
    "Images/Old Ones/1663997788255.jpg",
    "Images/Old Ones/1663997913089.jpg",
    "Images/Old Ones/1663997929527.jpg",
    "Images/Old Ones/1663997946262.jpg",
    "Images/Old Ones/1663998032444.jpg",
    "Images/Old Ones/1663998305935.jpg",
    "Images/Old Ones/1663998783924.jpg",
    "Images/Old Ones/1664267308447.jpg",
    "Images/Old Ones/1664300852023.jpg",
    "Images/Old Ones/1664301243124.jpg",
    "Images/Old Ones/1664525685404.jpg",
    "Images/Old Ones/1664786486023.jpg",
    "Images/Old Ones/1664786985535.jpg",
    "Images/Old Ones/1664787150102.jpg",
    "Images/Old Ones/1664787172056.jpg",
    "Images/Old Ones/1664787254866.jpg",
    "Images/Old Ones/1664787287988.jpg",
    "Images/Old Ones/1664787299618.jpg",
    "Images/Old Ones/1664787329895.jpg",
    "Images/Old Ones/1664787343950.jpg",
    "Images/Old Ones/1664787502177.jpg",
    "Images/Old Ones/1664787773954.jpg",
    "Images/Old Ones/1664787788201.jpg",
    "Images/Old Ones/1664787865215.jpg",
    "Images/Old Ones/1664787907081.jpg",
    "Images/Old Ones/1664788066357.jpg",
    "Images/Old Ones/1664788222610.jpg",
    "Images/Old Ones/1664797475649.jpg",
    "Images/Old Ones/1664797492317.jpg",
    "Images/Old Ones/1664797596426.jpg",
    "Images/Old Ones/1664800442958.jpg",
    "Images/Old Ones/1664800536056.jpg",
    "Images/Old Ones/1664800562228.jpg",
    "Images/Old Ones/1664800616865.jpg",
    "Images/Old Ones/1664915600780.jpg",
    "Images/Old Ones/1664915834274.jpg",
    "Images/Old Ones/1664915890961.jpg",
    "Images/Old Ones/1664915946411.jpg",
    "Images/Old Ones/1664916062400.jpg",
    "Images/Old Ones/1664916389902.jpg",
    "Images/Old Ones/1664934558668.jpg",
    "Images/Old Ones/1665037532307.jpg",
    "Images/Old Ones/1665037877961.jpg",
    "Images/Old Ones/1665038240969.jpg",
    "Images/Old Ones/1665038331138.jpg",
    "Images/Old Ones/1665038440669.jpg",
    "Images/Old Ones/1665039105682.jpg",
    "Images/Old Ones/1665039141218.jpg",
    "Images/Old Ones/1665039155346.jpg",
    "Images/Old Ones/1665039171132.jpg",
    "Images/Old Ones/1665039230809.jpg",
    "Images/Old Ones/1665039340562.jpg",
    "Images/Old Ones/1665039855127.jpg",
    "Images/Old Ones/1665040849818.jpg"
];
  
function crearElemento(tag, props, parent) {
    const element = document.createElement(tag);
    Object.keys(props).forEach(key => element[key] = props[key]);
    if (parent) parent.appendChild(element);
    return element;
}
  
const grid = document.querySelector(".grid");

imagenes.forEach(imagen => {
    crearElemento('img', { src: imagen, alt: 'imagen', className: 'imagen', 'data-src': imagen }, grid);
});

function lazyLoad(images) {
    images.forEach(image => {
        if (image.getAttribute('data-src')) {
            image.setAttribute('src', image.getAttribute('data-src'));
            image.onload = () => image.removeAttribute('data-src');
        }
    });
}

window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.imagen');
    lazyLoad(images);
});