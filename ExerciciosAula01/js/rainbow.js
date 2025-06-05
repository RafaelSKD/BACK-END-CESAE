const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

const letras = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
    const letra = letras[i];
    letra.style.color = colors[i];
}