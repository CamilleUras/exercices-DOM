// création d'une variable et rappel de l'ID <a>
let myLink = document.getElementById("link");
// séléction de l'élément href + lecture de l'attribut
myLink.getAttribute("href");
// création d'une variable et rappel de l'ID <p>
var showValue = document.getElementById("value");
// rappel de la variable pour modifier l'élément p
// ici je veux afficher le contenue de mon lien dans un texte 
showValue.textContent = "La valeur de l'attribut href est : " + myLink;
// modification du lien href avec setAtrribute 
myLink.setAttribute("href", "https://www.nouveau-lien.com");
// rappel de la variable showValue pour afficher le nouveau lien dans un texte 
showValue.textContent = "La valeur de l'attribut href est : " + myLink;