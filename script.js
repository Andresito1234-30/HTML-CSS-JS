// Función para mostrar el contenido específico al hacer click en los botones
function showContent(sectionId) {
    // Ocultar todas las secciones de contenido
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Cerrar el menú hamburguesa si está abierto (en móviles)
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
}

// Función para inicializar todos los eventos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de hamburguesa
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    // Obtener referencia al menú de navegación
    const navMenu = document.querySelector('.nav-menu');
    
    // Agregar evento click al botón de hamburguesa
    hamburgerBtn.addEventListener('click', function() {
        // Alternar la clase 'active' en el menú de navegación
        navMenu.classList.toggle('active');
    });
    
    // Cerrar el menú hamburguesa al hacer click fuera de él
    document.addEventListener('click', function(event) {
        // Verificar si el click fue fuera del menú y del botón
        if (!event.target.closest('.nav-menu') && !event.target.closest('#hamburgerBtn')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Prevenir el comportamiento por defecto de los enlaces para mantener en la misma página
    /*const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí se podría agregar lógica específica para cada enlace
            console.log('Click en enlace: ' + this.textContent);
        });
    });*/
    
    // Inicializar con la sección de bienvenida activa
    showContent('welcome');
});
