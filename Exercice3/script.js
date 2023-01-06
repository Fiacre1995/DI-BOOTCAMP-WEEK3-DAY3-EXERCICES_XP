/** 
@author: DION FIACRE ARMEL
@description: Deplacer un element en indiquant les coordonnees de depart et d'arriver
*/

/*======================== Exercice 3 =======================*/

//Attribuer l'Attribue draggable et le mettre a true 

let VariableDiv = document.getElementById('box');
 VariableDiv.setAttribute('draggable', 'true');

 //Recenser les coordonnees au depart

 VariableDiv.addEventListener("dragstart", Fonction1)

 function Fonction1(event){
    event.target.style.backgroundColor = "lightpink";
    console.log ("drag " +  "X: " + event.clientX  + " Y: " +  event.clientY);
 }

 //Recencer les Cordonnees apres deplacement

 VariableDiv.addEventListener("dragend", Fonction2)

 function Fonction2(event){
    event.target.style.backgroundColor = "lightgreen";
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; s
    console.log ("dragend" + "X: " + event.clientX  + " Y: " +  event.clientY );
 }

