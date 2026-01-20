document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.produit-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});
