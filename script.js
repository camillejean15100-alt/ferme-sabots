// Petit effet pour faire apparaître les éléments au défilement
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.produit-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Message de bienvenue dans la console pour vérifier que ça marche
console.log("Le script de la Ferme aux Sabots Fendus est chargé !");
