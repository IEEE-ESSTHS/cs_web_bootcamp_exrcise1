let compteur = 0;
const nombre = document.getElementById('nombre');
const bouton = document.getElementById('bouton');

bouton.addEventListener('click', function() {
    compteur++;
    nombre.textContent = compteur;
});