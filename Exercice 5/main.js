 // création d'un élément div
 let newDiv = document.createElement("div");

 // ajout de contenu à l'élément
 let newContent = document.createTextNode("Hi there!");

 // ajout du texte à la nouvelle div 
 newDiv.appendChild(newContent);

 // ajout du nouvel élément et de son contenu dans le DOM 
 let currentDiv = document.getElementById("div1");
 
 //choix du positionnement dans le DOM 
 document.body.insertBefore(newDiv, currentDiv);