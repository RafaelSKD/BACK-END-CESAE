const container = document.getElementById("container");

const colors = [
    "#561e8f", "#5b28a1", "#6031b3", "#663bc6", "#6b45d8", "#705eeb", "#746ffe", "#7881f5", "#7c92ec", "#80a4e2",
    "#84b5d9", "#88c6d0", "#8cd8c6", "#90e9bd", "#94fab4", "#97f2a9", "#9ae99f", "#9de195", "#a0d88b", "#a3d081",
    "#a6c777", "#a9bf6d", "#abc663", "#aecd59", "#b1d44f", "#b3db45", "#b6e23b", "#b9e931", "#bbf027", "#bef71d",
    "#c1fe13", "#c3f412", "#c5ea11", "#c8e010", "#cad60f", "#cccb0e", "#cec10d", "#d0b70c", "#d2ad0b", "#d4a30a",
    "#d69909", "#d88f08", "#da8507", "#dc7b06", "#de7105", "#e06704", "#e25d03", "#e45302", "#e64901", "#e83f00",
    "#e6340b", "#e42916", "#e21e21", "#e0132c", "#de0837", "#d9003c", "#d30041", "#cd0046", "#c7004b", "#c10050",
    "#bb0055", "#b5005a", "#af005f", "#a90064", "#a30069", "#9d006e", "#970073", "#910078", "#8b007d", "#850082",
    "#7f0087", "#79008c", "#730091", "#6d0096", "#67009b", "#6100a0", "#5b00a5", "#5500aa", "#4f00af", "#4900b4",
    "#4300b9", "#3d00be", "#3700c3", "#3100c8", "#2b00cd", "#2500d2", "#1f00d7", "#1900dc", "#1300e1", "#0d00e6",
    "#0700eb", "#0100f0", "#0004e9", "#0008e2", "#000cdb", "#0010d4", "#0014cd", "#0018c6", "#001cbf", "#0020b8"
];


for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'Botao' + i;
    button.style.backgroundColor = colors[i - 1];
    button.style.border = '10px solid black'
    container.appendChild(button);}

    