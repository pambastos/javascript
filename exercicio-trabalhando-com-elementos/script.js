let paiBody = document.getElementsByTagName('body')[0];
let primeiraTag = document.createElement('h1');
primeiraTag.id = 'tagh1';
primeiraTag.innerText = 'Exercício 5.2 - JavaScript DOM ';
paiBody.appendChild(primeiraTag);



let primeiraTagMain = document.createElement('main');
primeiraTagMain.classList.add('main-content');
paiBody.appendChild(primeiraTagMain);


let primeiraTagSection = document.createElement('section');
primeiraTagSection.classList.add('center-content');
primeiraTagMain.appendChild(primeiraTagSection);


let primeiraTagP = document.createElement('p');
primeiraTagSection.appendChild(primeiraTag);


let segundaTagSection = document.createElement('section');
segundaTagSection.classList.add('left-content');
primeiraTagMain.appendChild(segundaTagSection);


let terceiraTagSection = document.createElement('section');
terceiraTagSection.classList.add('right-content');
primeiraTagMain.appendChild(terceiraTagSection);




