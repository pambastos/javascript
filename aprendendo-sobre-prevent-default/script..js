



// SELETORES
let inputTexto = document.querySelector("#input-text");
let inputCheckbox = document.querySelector("#input-checkbox");
let  linkHref = document.querySelector("#href");


linkHref.addEventListener('click', (event) => {
    event.preventDefault();
  });

  inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
  });

  inputTexto.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
  });
