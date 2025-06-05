let flag = 1;

function troca() {
    const img = document.querySelector("img");

    if (flag === 1) {
        img.src = "https://devsprouthosting.com/images/chicken.jpg";
        flag = 0;
    } else {
        img.src = "https://devsprouthosting.com/images/egg.jpg";
        flag = 1;
    }
}