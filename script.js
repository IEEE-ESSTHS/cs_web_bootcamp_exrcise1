
const bouton = document.getElementById("monBouton");
const texte = document.getElementById("texte");
bouton.addEventListener("click", function() {
    texte.textContent = "Vous avez cliqué sur le bouton !";
});
