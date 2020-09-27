const btn = document.querySelector("#btn");
let resultat = document.querySelector("#resultat");
let nbClic = 0;

btn.addEventListener('click', () => {
    nbClic++;
    resultat.innerHTML = "Vous avez cliqué " + nbClic + " fois !";
});