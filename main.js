// Inicializamos Owl Carousel al terminar de cargar el DOM
// (Similar a lo indicado en la clase de 'Mis Trabajos')
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
});
