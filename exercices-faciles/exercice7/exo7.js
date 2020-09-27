// fonction qui verifie si un chiffre est divisible par 3

let nb1 = 123;
let nb2 = 20;

const verificationNombreDivisiblePar3 = (nb) => {
    if(nb % 3 === 0){
        console.log(`Le résultat de ${nb} / 3 = ${nb / 3}`);
    } else {
        console.log(`Le chiffre ${nb} n'est pas divisible par 3`);
    }
}

verificationNombreDivisiblePar3(nb1);
verificationNombreDivisiblePar3(nb2);