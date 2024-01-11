// création d'une fonction pour changer la couleur de mon bouton 
function changeBg(color) {
    myButton.style.backgroundColor = color;
}
// création de la variable pour rappeler mon Id
let myButton = document.getElementById ("myButton");
// rappel de la variable + ajout de texte
myButton.textContent = "je suis un bouton";
// rappel de la variable + changement de couleur
myButton.style.backgroundColor = "red";
// ajout d'un événement click et rappel de la fonction
// elle effectue un changement de couleur de bg du boutton au click
myButton.addEventListener("click", () => changeBg("blue"));