
//// Récupérer l'élément de liste par son ID <ul>
let myList = document.getElementById("list");

//// Création des éléments li
let newElement1 = document.createElement("li");
let newElement2 = document.createElement("li");
let newElement3 = document.createElement("li");

// Ajout du texte à chaque élément li
newElement1.textContent = "premier";
newElement2.textContent = "deuxième";
newElement3.textContent = "troisième";

 //utilisation appendChild: pour ajouter chaque élément <li> à la liste ul
 myList.appendChild(newElement1);
 myList.appendChild(newElement2);
 myList.appendChild(newElement3);