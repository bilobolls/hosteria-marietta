// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionamos la imagen principal y todas las miniaturas de la Habitación 1
    const imagenPrincipal = document.getElementById('imagen-principal-1');
    const miniaturas = document.querySelectorAll('.thumbnails-habitacion .thumb');

    // Recorremos cada miniatura y le agregamos la acción de "clic"
    miniaturas.forEach(function(miniatura) {
        miniatura.addEventListener('click', function() {
            
            // 1. Cambiamos la foto grande por la que el usuario acaba de tocar
            imagenPrincipal.src = this.src;

            // 2. Le sacamos el borde dorado a todas las miniaturas
            miniaturas.forEach(m => m.classList.remove('active'));

            // 3. Le ponemos el borde dorado SOLO a la que clickeamos
            this.classList.add('active');
        });
    });
});
// ==========================================
    // CÓDIGO PARA EL MENÚ HAMBURGUESA
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    const links = document.querySelectorAll('#menu-links li a');

    // 1. Abrir/cerrar menú al tocar las 3 rayitas
    menuToggle.addEventListener('click', function() {
        menuLinks.classList.toggle('activo');
    });

    // 2. Cerrar el menú automáticamente cuando el usuario toca un enlace
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            menuLinks.classList.remove('activo');
        });
    });
    // ==========================================
    // CÓDIGO PARA EL CAMBIO DE COLOR DEL MENÚ
    // ==========================================
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        // Si el usuario baja más de 50 píxeles, el menú se pone oscuro
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Si vuelve bien arriba de todo, vuelve a ser transparente
            header.classList.remove('scrolled');
        }
    });