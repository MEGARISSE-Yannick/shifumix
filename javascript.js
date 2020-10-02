var random;
var signeU = "";
var signeIA = "";
var round;
var scorej=0;
var scoreIA=0;
function modifnom() {

    document.getElementById("nom").innerHTML = prompt;
    var person = prompt("Ton nom?", "Utilisateur");
    if (person != null) {
        document.getElementById("nom").innerHTML = person;
    }
} /*prompt pour pouvoir entrer le nom de l'utilisateur*/
function modifnomIA() {

    document.getElementById("nomIA").innerHTML = prompt;
    var person = prompt("Son nom?", "Ordinateur");
    if (person != null) {
        document.getElementById("nomIA").innerHTML = person;
    }
} /*prompt pour pouvoir entrer le nom de l'IA*/

function modifIA() {
    random = Math.round(Math.random() * 3);
    if (random == 1) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/xggt.png";/*1*/
        signeIA = "pierre"; console.log(signeIA + ' ' + 'choixIA');


    }
    else if (random == 2) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/8mw4.png";/*2*/
        signeIA = "feuille"; console.log(signeIA + ' ' + 'choixIA');

    }
    else if (random == 3) {
        document.getElementById("IA-C").src = "https://zupimages.net/up/20/40/us30.png";/*3*/
        signeIA = "ciseaux"; console.log(signeIA + ' ' + 'choixIA');


    }
} /* recupere le choix aleatoire de l'IA*/
function modifimg(signe) {

    if (signe == "pierre") {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/xggt.png";/*1*/
        signeU = "pierre"; console.log(signeU + ' ' + 'choixutilisateur');


    }
    else if (signe == "feuille") {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/8mw4.png";/*2*/
        signeU = "feuille"; console.log(signeU + ' ' + 'choixutilisateur');


    }
    else if (signe == 'ciseaux') {
        document.getElementById("joueur-C").src = "https://zupimages.net/up/20/40/us30.png";/*3*/
        signeU = "ciseaux"; console.log(signeU + ' ' + 'choixutilisateur');


    }

}/*recupere le choix de l'utilisateur*/
function ajout2() {
    var round = document.getElementById("increm2").innerHTML;
    round++;
    document.getElementById("increm2").innerHTML = round;
    document.getElementById("")

}/*incrementation du round */
function ajout3() {
    var round = document.getElementById("increm3").innerHTML;
    round++;
    document.getElementById("increm3").innerHTML = round;
    document.getElementById("")

}/*incrementation du round *//*trois le meme code car le glitch ne faisait pas correctement sans */

function ajout1() {
    var round = document.getElementById("increm1").innerHTML;
    round++;
    document.getElementById("increm1").innerHTML = round;
    document.getElementById("")
    if (round == 1) {
        console.log('tour1')
        if (signeU == 'pierre' && signeIA == 'ciseaux' || signeU == 'ciseaux' && signeIA == 'feuille' || signeU == 'feuille' && signeIA == 'pierre') {
            console.log('joueur win')
            scorej++;
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-1").style.background = 'green';
            document.getElementById("points-IA-1").style.background = 'red';
        }
        else if (signeU == signeIA) {
            console.log('egalite')
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-1").style.background = 'gray';
            document.getElementById("points-IA-1").style.background = 'gray';
        }
        else {
            console.log('joueur lose')
            scoreIA++;
            console.log(scorej,+''+ scoreIA)

            document.getElementById("points-J-1").style.background = 'red';
            document.getElementById("points-IA-1").style.background = 'green';

        }

    }/*tour 1 couleur led egalite lose ou win calcule du score */
    else if (round == 2) {
        console.log('tour2')
        if (signeU == 'pierre' && signeIA == 'ciseaux' || signeU == 'ciseaux' && signeIA == 'feuille' || signeU == 'feuille' && signeIA == 'pierre') {
            console.log('joueur win')
            scorej++;
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-2").style.background = 'green';
            document.getElementById("points-IA-2").style.background = 'red';
        }
        else if (signeU == signeIA) {
            console.log('egalite')
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-2").style.background = 'gray';
            document.getElementById("points-IA-2").style.background = 'gray';
        }
        else {
            console.log('joueur lose')
            scoreIA++;
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-2").style.background = 'red';
            document.getElementById("points-IA-2").style.background = 'green';
        }

    }/*tour 2 couleur led egalite lose ou win calcule du score */
    else if (round == 3) {
        console.log('tour3')
        if (signeU == 'pierre' && signeIA == 'ciseaux' || signeU == 'ciseaux' && signeIA == 'feuille' || signeU == 'feuille' && signeIA == 'pierre') {
            console.log('joueur win')
            scorej++;
            console.log(scorej,+' '+ scoreIA)


            document.getElementById("points-J-3").style.background = 'green';
            document.getElementById("points-IA-3").style.background = 'red';
        }
        else if (signeU == signeIA) {
            console.log('egalite')
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-3").style.background = 'gray';
            document.getElementById("points-IA-3").style.background = 'gray';
        }
        else {
            console.log('joueur lose')
            scoreIA++;
            console.log(scorej,+' '+ scoreIA)

            document.getElementById("points-J-3").style.background = 'red';
            document.getElementById("points-IA-3").style.background = 'green';
        }

    }/*tour 3 couleur led egalite lose ou win calcule du score */
}
function score() {
    if (scorej>scoreIA) {
        console.log('gg tu gagne')
    }
    else if (scoreIA>scorej) {
        console.log('pas gg tu perd')
    }
    else{
        console.log('match nul parfait')
    }
}

