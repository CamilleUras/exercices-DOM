// création de la variable et rappel de mon ID <button>
let button = document.getElementById("myButton");
// ajout d'une nouvelle class à mon bouton
button.classList.add("newClass");
// supprime une class de mon bouton
button.classList.remove("newClass");
// création d'une fonction pour baculer d'une class à une autre
function toggleClasses() {
    // La méthode classList.toggle() est utilisée pour basculer la présence d'une classe sur un élément. 
    //Si la classe est présente, elle la retire, et si elle est absente, 
    //elle l'ajoute. Cette méthode prend un seul argument, 
    //qui est le nom de la classe que vous souhaitez basculer.
    button.classList.toggle("myButton");
    button.classList.toggle("newClass");
}
// création de l'évenement lors du "click" sur le bouton en utilisant la fonction ci-dessus
button.addEventListener("click", toggleClasses);