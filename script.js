document.addEventListener('DOMContentLoaded', (event) => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Simple pulse animation before redirection
            const icon = this.querySelector('.social-icon');
            icon.style.animation = 'pulse 0.3s';
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 300); // Wait for animation to complete
        });

        // Ensure animation doesn't persist after click
        link.addEventListener('animationend', function() {
            this.querySelector('.social-icon').style.animation = '';
        });
    });
});