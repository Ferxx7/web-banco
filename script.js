// Array de imágenes promocionales
const promoImages = [
    'img/PROMO1.JPG',
    'img/PROMO2.JPG',
    'img/PROMO3.JPG'
    // Agrega más imágenes si es necesario
  ];
  
  let currentIndex = 0;
  const carouselContainer = document.getElementById('carousel');
  
  // Función para inicializar el carrusel
  function initCarousel() {
    // Crear elementos de imagen para cada ruta y agregarlos al contenedor
    promoImages.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      if (index === 0) img.classList.add('active');
      carouselContainer.appendChild(img);
    });
  
    // Cambiar de imagen cada 4 segundos
    setInterval(changeImage, 4000);
  }
  
  // Función para cambiar a la siguiente imagen
  function changeImage() {
    const images = carouselContainer.querySelectorAll('img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }
  
  // Ocultar loader cuando la página haya cargado completamente
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    
    // Iniciar carrusel después de ocultar loader
    initCarousel();
  });
  