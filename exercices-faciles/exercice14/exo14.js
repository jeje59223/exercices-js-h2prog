const btn = document.querySelector("#btn");
const resultat = document.querySelector("#resultat");

btn.addEventListener("click", () => {
  let txt = "";
  for (let i = 0; i <= 10; i++) {
    txt += `3 x ${i} = ${3 * i}<br />`;
  }
  resultat.innerHTML = txt;
});
