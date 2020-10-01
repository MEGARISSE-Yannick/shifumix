var random ;
var signeU = "";
var signeIA = "";
function modifnom() {
    document.getElementById("nom").innerHTML = prompt;
    var person = prompt("Ton nom?", "Utilisateur");
    if (person != null) {
        document.getElementById("nom").innerHTML = person;
    }
} /*prompt pour pouvoir entrer le nom de l'utilisateur*/

function modifIA() {
    random = Math.round(Math.random() * 3);
    if (random == 1) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/xggt.png";/*1*/
        signeIA = "pierre";        console.log(signeIA);


    }
    else if (random == 2) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/8mw4.png";/*2*/
     signeIA = "feuille";        console.log(signeIA);

    }
    else if (random == 3) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/us30.png";/*3*/
         signeIA = "ciseaux";        console.log(signeIA);


    }
} /* sert a avoir le choix aleatoire de l'IA*/
function modifimg(signe) {

    if (signe == "pierre") {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/xggt.png";/*1*/
        signeU = "pierre";        console.log(signeU);


    }
    else if (signe == "feuille") {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/8mw4.png";/*2*/
        signeU = "feuille";        console.log(signeU);


    }
    else if (signe == 'ciseaux') {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/us30.png";/*3*/
        signeU = "ciseaux";        console.log(signeU);


    }
    
}/*permet de selection le choix de l'utilisateur*/

function ajout() {
    var round = document.getElementById("increm").innerHTML;
    round++;
    document.getElementById("increm").innerHTML = round;
    document.getElementById("")

}/*incrementation du round */

function joueurLose() {
    if (signeU == "pierre" && signeIA == "feuille") {
        document.getElementById("points-J-1").style.background = 'red';
        document.getElementById("points-IA-1").style.background = 'green';
        console.log("joueur los");        console.log(signeIA);

    }
    else if (signeU == "feuille"&& signeIA == "ciseaux") {
        document.getElementById("points-J-1").style.background = 'red';
        document.getElementById("points-IA-1").style.background = 'green';
        console.log("joueur los");
        console.log(signeIA);

    }
    else if (signeU ==  "ciseaux"&& signeIA == "pierre") {
        document.getElementById("points-J-1").style.background = 'red';
        document.getElementById("points-IA-1").style.background = 'green';
        console.log("joueur los");
        console.log(signeIA);

    }

}/*joueur lose tous les cas possible*/
function joueurWin() {
    if (signeU == "pierre" && signeIA == "ciseaux") {
        document.getElementById("points-J-1").style.background = 'green';
        document.getElementById("points-IA-1").style.background = 'red';
        console.log("joueur win");
        console.log(signeU);


    }
    else if (signeU == "feuille" && signeIA == "pierre") {
        document.getElementById("points-J-1").style.background = 'green';
        document.getElementById("points-IA-1").style.background = 'red';
        console.log("joueur win");
        console.log(signeU);

    }
    else if (signeU == "ciseaux" && signeIA == "feuille") {
        document.getElementById("points-J-1").style.background = 'green';
        document.getElementById("points-IA-1").style.background = 'red';
        console.log("joueur win");
        console.log(signeU);

    }

}/*joueur win tous les cas possible*/
function egalite() {
    if (signeU==signeIA); {
        console.log("égalité");
        console.log(signeU);
        console.log(signeIA);

    }
}/*égalité*/

    


