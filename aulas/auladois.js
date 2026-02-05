const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

  rl.question("Digite o seu número de vitórias: ", (vitorias) => {
  rl.question("Digite o seu número de derrotas: ", (derrotas) => {
    let xp = Number(vitorias) - Number(derrotas);
    let nivel = "";

    if (xp <= 10){
   nivel = "Ferro";
} else if (xp >= 11 && xp <= 20){
   nivel = "Bronze";
 } else if (xp >= 21 && xp <= 50){
   nivel = "Prata";
 } else if (xp >= 51 && xp <= 80){
   nivel = "Ouro";
 } else if (xp >= 81 && xp <= 90){
   nivel = "Diamante";
 } else if (xp >= 91 && xp <= 100){
   nivel = "Lendário";
 } else {
   nivel = "Imortal";
 }

 console.log(`O Herói tem saldo de ${xp} está no nível de ${nivel}`);

 rl.close();
  });
});
