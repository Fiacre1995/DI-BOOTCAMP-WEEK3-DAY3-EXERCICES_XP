/** 
@author: DION FIACRE ARMEL
@description: Deplacer un element de la gauche vers la droite en tenant compte de l'element parent en utilisant la fonction setInterval
*/

/*======================== Exercice 1 =======================*/

//premiere partie : Afficher un Alert a partir de la fonction

function Alertera() {
    alert("Hello World");
}
setTimeout(Alertera, 2000);

//Deuxieme Partie : Afficher un message aprés 2 secondes

function AjoutP() {
    let VariableDiv = document.getElementById("container");
    let CreerP = document.createElement("p");
    VariableDiv.appendChild(CreerP);
    let VariableP = document.getElementsByTagName("p");
    VariableP.innerHTML = "Bonjour et merci";
}
setTimeout(AjoutP, 2000);

//Troisieme Partie : Repeter un message chaque 2 secondes

function Fonction1() {
    let VariableDiv1 = document.getElementById("container");
    let CreerP2 = document.createElement("p");
    VariableDiv1.appendChild(CreerP2);
    let VariableP2 = document.getElementsByTagName("p");
    for(let choix of VariableP2){
        choix.innerHTML = "Bonjour et merci";
    }

    //Stop le processus en cours
    if( VariableP2.length > 5){
        clearInterval(Interval);
    }
    
}
let Interval = setInterval(Fonction1, 2000);

//Arreter un processus apres avoir cliquer sur le bouton

let VariableButton = document.getElementById("clear");
VariableButton.addEventListener("click", Fonction2);

function Fonction2(){
    let VariableP3 = document.getElementsByTagName("p");
    //let LengthP = VariableP3.length;
    if( VariableP3.length > 5){
            clearInterval(Interval);
    }
     
};






