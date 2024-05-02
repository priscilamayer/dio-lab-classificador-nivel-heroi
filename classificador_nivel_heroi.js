let nomeHeroi = "Maga Lee";
let XPHeroi = 1001;

if (XPHeroi >= 0 && XPHeroi <= 1000){
    nivelHeroi = "Ferro";
}
if (XPHeroi >= 1001 && XPHeroi <= 2000){
    nivelHeroi = "Bronze";
}
if (XPHeroi >= 2001 && XPHeroi <= 5000){
    nivelHeroi = "Prata";
}
if (XPHeroi >= 5001 && XPHeroi <= 7000){
    nivelHeroi = "Ouro";
}
if (XPHeroi >= 7001 && XPHeroi <= 8000){
    nivelHeroi = "Platina";
}
if (XPHeroi >= 8001 && XPHeroi <= 9000){
    nivelHeroi = "Ascendente";
}
if (XPHeroi >= 9001 && XPHeroi <= 10000){
    nivelHeroi = "Imortal";
}
if (XPHeroi >= 10001){
    nivelHeroi = "Radiante";
}
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + ".");