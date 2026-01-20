// Attendre que toute la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sélectionner toutes les cartes de produits
    const cards = document.querySelectorAll('.produit-card');

    // 2. Fonction pour vérifier la position des cartes au défilement
    const checkCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            // Si la carte est visible dans l'écran
            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // 3. Écouter le défilement de la souris
    window.addEventListener('scroll', checkCards);

    // Lancer une première vérification au chargement (au cas où les cartes sont déjà visibles)
    checkCards();

    console.log("Système d'animation de la Ferme chargé !");
});
