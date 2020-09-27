const btn = document.querySelector("#btn");
const resultat = document.querySelector("#resultat");

btn.addEventListener("click", () => {
    let nbAleatoire = Math.floor(Math.random() * Math.floor(2));
    if(nbAleatoire === 0){
        resultat.innerHTML = "Pile";
    } else {
        resultat.innerHTML = "Face";
    }
});