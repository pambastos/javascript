/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


        function mudarTextoTagP(){
         const textotagp = document.getElementsByTagName('p')[1];
         textotagp.innerText = 'Daqui a 2 anos estarei passeando em LA'
        }
        mudarTextoTagP();

        function mudarCorQuadradoAmarelo(){
        const quadradoAmarelo = document.getElementsByClassName('main-content')[0];
        quadradoAmarelo.style.background = 'green' ;
        }
        mudarCorQuadradoAmarelo();

        function mudarCorQuadradoVermelho(){
        const quadradoVermelho = document.getElementsByClassName('center-content')[0];
        quadradoVermelho.style.background = 'white' ;
        }
        mudarCorQuadradoVermelho();

        function corrigirTextoDaTagH1(){
        const textoDaTagH1ParaCorrigir = document.getElementsByTagName("h1")[0];
        textoDaTagH1ParaCorrigir.innerText = 'Exercício 5.1 - JavaScripit';
        }
        corrigirTextoDaTagH1();

        function passarParaMaiúsculo(){
        let textoTagP = document.getElementsByTagName('p')[0];
        textoTagP.innerText = textoTagP.innerText.toUpperCase();
        }
        passarParaMaiúsculo();

        function exibirConteudo() {
        let conteudo = document.getElementsByTagName('p');
        for (let index = 0; index < conteudo.length; index += 1) {
        console.log(conteudo[index].innerHTML);}
        }    
       
        exibirConteudo();
        
