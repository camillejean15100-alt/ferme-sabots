// On attend que la page soit prête
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Fonction pour ajouter une ombre au menu quand on descend
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            header.style.transition = "all 0.3s ease";
        } else {
            header.style.boxShadow = "none";
        }
    });

    console.log("Le script de la Ferme aux Sabots Fendus est chargé !");
});
