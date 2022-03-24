let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

elementoOndeVoceEsta.parentElement.style.color = 'blue' ;

elementoOndeVoceEsta.nextElementSibling.innerText = 'Olá, mundo!';

let pai = document.getElementById('pai');
pai.firstElementChild;


elementoOndeVoceEsta.previousElementSibling;

elementoOndeVoceEsta.nextSibling;

elementoOndeVoceEsta.nextElementSibling;

pai.lastElementChild.previousElementSibling;

let irmaoDoElementoOndeVoceEsta = document.createElement('section');
irmaoDoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoDoElementoOndeVoceEsta);

let filhoDoElementoOndeVoceEsta = document.createElement('section');
filhoDoElementoOndeVoceEsta.id = 'filhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);











