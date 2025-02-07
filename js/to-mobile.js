// Vérifie la taille de l'écran et redirige si nécessaire
function checkScreenSize() {
    if (window.innerWidth < 768) {
        window.location.href = "mobile-error.html"; // Redirection vers la page mobile
    }
}

// Exécuter la fonction au chargement
document.addEventListener("DOMContentLoaded", checkScreenSize);

// Vérifier aussi lorsqu'on redimensionne la fenêtre
window.addEventListener("resize", checkScreenSize);
