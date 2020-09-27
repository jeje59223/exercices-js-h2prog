// Tables de multiplications
// afficher toutes les tables de multiplications

let ligne = [];
for(let i = 1; i <= 10; i++){
    let colonne = [];
    for(let j = 1; j <= 10; j++){
        colonne.push(j * i)
    }
    ligne.push(colonne);
}
// console.log(ligne);

let lesTables = "---------------------------------------------------\n";
for(let j = 0; j <= 9; j++){
    let txt = "|";
    for(let i = 0; i <= 9; i++){
        let nb = ""+ligne[j][i];
        if(nb.length === 1){
            txt += "0";
        }
        txt += ligne[j][i];
        if(nb.length === 3){
            txt += "|";
        } else {
            txt += " | ";
        }
    }
    lesTables += txt + "\n";
}
lesTables += "---------------------------------------------------";
console.log(lesTables);