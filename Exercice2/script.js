/** 
@author: DION FIACRE ARMEL
@description: Deplacer un element de la gauche vers la droite en tenant compte de l'element parent en utilisant la fonction setInterval
*/

/*======================== Exercice 2 =======================*/


function myMove(){
let valeur = 0;

let Interval = setInterval( function (){ //Definis la fonction Set Interval
    
                let VariableDiv = document.getElementById("animate"); //Selectionner Variable div ayant id:'animate'

                valeur = valeur + 1;
                VariableDiv.style.left = `${valeur}px`;

                if(valeur === 350){
                    clearInterval(Interval); //Definis le cadre du deplacement de la div enfant
                }
                
                }, 1);
};