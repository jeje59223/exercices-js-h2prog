// verifier si un mot contient moins de 8 caracteres

const afficherTailleDuMot = (mot) => {
  if (mot.length > 8) {
    console.log(`Le mot ${mot} fait plus de 8 caractères !`);
  } else {
    console.log(`Le mot : ${mot} contient ${mot.length} caractères !`);
  }
};

afficherTailleDuMot("chat");
