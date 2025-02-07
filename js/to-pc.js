// Vérifie en permanence la taille de l'écran
function checkScreenSizeOnErrorPage() {
    if (window.innerWidth >= 768) {
        window.location.href = "index.html"; // Retour automatique à la page principale
    }
}

// Vérifier à chaque redimensionnement
window.addEventListener("resize", checkScreenSizeOnErrorPage);
