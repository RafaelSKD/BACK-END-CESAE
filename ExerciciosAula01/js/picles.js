let flag = 1;

function troca() {
    if (flag == 1) {
        document.querySelector('span').innerText = 'Yack';
        flag = 0;
    } else {
        document.querySelector('span').innerText = 'Yammi';
        flag = 1;
    }
}