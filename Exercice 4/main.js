    
    // rappel de la div avec l'ID 
    const element = document.getElementById("myElement");
    // ajout d'un texte sur la première class de mon élément, <h1>
    element.getElementsByClassName("child")[0].textContent = "je suis un titre";
    // changement de la couleur sur la premère class de mon élément, <h1>
    element.getElementsByClassName("child")[0].style.color = "blue";
    // ajout d'un texte sur la deuxième class de mon élément, <p> 
    element.getElementsByClassName("child")[1].textContent = "je suis un élément";
    // changement de la couleur sur la deuxième class de mon élément, <p>
    element.getElementsByClassName("child")[1].style.fontSize = "24px";