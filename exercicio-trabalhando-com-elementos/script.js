let paiBody = document.getElementsByTagName('body')[0];
let primeiraTag = document.createElement('h1');
primeiraTag.id = 'tagh1';
primeiraTag.classList.add('title');
primeiraTag.innerText = 'Exercício 5.2 - JavaScript DOM ';
paiBody.appendChild(primeiraTag);



let primeiraTagMain = document.createElement('main');
primeiraTagMain.style.backgroundColor='green';
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
terceiraTagSection.style.marginRight='auto';
primeiraTagMain.appendChild(terceiraTagSection);


let adcionarImagem = document.createElement('img');
adcionarImagem.classList.add('small-image');
adcionarImagem.scr = 'https://picsum.photos/200';
segundaTagSection.appendChild(adcionarImagem);


let listaNaoOrdenada = document.createElement('ul');
terceiraTagSection.appendChild(listaNaoOrdenada);
let arrayDeNumeros = ['um', ' dois', 'tres' , 'quatro' , 'cinco' , 'seis' , 'sete' , 'oito' ,'nove' , 'dez']
for (let numero in arrayDeNumeros) {
let elementoDaLista = document.createElement('li');
elementoDaLista.innerText = arrayDeNumeros[numero];
listaNaoOrdenada.appendChild(elementoDaLista);
}


let tagh31 = document.createElement('h3');
tagh31.classList.add('description');
primeiraTagMain.appendChild(tagh31);

let tagh32 = document.createElement('h3');
tagh32.classList.add('description');
primeiraTagMain.appendChild(tagh32);

let tagh33 = document.createElement('h3');
tagh33.classList.add('description');
primeiraTagMain.appendChild(tagh33);


primeiraTagMain.removeChild(segundaTagSection);

listaNaoOrdenada.lastChild.remove();
listaNaoOrdenada.lastChild.remove();


