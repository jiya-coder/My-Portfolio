document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thankyou-message').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('thankyou-message').style.display = 'none';
    }, 3200);
});

// Optional: Animate entrance of photo cards on scroll (for browsers that support Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.photo-card');
    if ('IntersectionObserver' in window) {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'none';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(32px) scale(0.95)';
            observer.observe(card);
        });
    }
});