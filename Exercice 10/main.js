// création de la variable et appel de l'ID <a>
let myLink = document.getElementById("link");
// affichage du lien href dans la console du navigateur web
myLink.getAttribute("href")
console.log("la valeur de l'attribut est:"+myLink);
// modification du lien href avec setAttribute et affichage dans la console 
myLink.setAttribute("href","https://www.google.com");
console.log("la valeur de l'attribut est:"+myLink);
