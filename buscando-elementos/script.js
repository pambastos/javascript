let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let pai = elementoOndeVoceEsta.parentNode;
pai.style.color = "green" ;

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';


let primeirofilho = pai.firstElementChild;

let primeiroFilhob = elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilhob = pai.lastElementChild.previousElementSibling;






