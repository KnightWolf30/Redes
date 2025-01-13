document.addEventListener('DOMContentLoaded', (event) => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href === window.location.href) {
                e.preventDefault();
                alert('Este enlace no está disponible aún.');
            }
        });
    });
});