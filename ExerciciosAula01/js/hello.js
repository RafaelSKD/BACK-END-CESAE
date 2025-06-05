// • Ao passar em cima do botão Hello (não clicar) deverá fazer um alert que diga ‘olá’

document.getElementById('hello').addEventListener('mouseover', hello);

function hello(){
    alert('ola');
}



// • Ao passar em cima do botão Bye deverá fazer um alert que diga ‘Adeus’
document.getElementById('goodbye').addEventListener('mouseover', bye);

function bye(){
    alert('adeus');
}


// 1. Cria um Botão que crie uma cor aleatória para o background e mostre qual é no HTML.

const button = document.getElementById('change-color');
button.addEventListener('click', random);
const body = document.querySelector('body')
const p = document.getElementById('new-color');

function random() {
  const color = corAleatoria();
  body.style.backgroundColor = color;
  p.innerText = color;
}


































function corAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}