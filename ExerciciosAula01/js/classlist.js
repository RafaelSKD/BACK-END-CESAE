function troca() {
    const hello = document.querySelectorAll('li');
    for (let i = 0; i < hello.length; i++) {
        if (hello[i].classList.contains("highlight")) {
            hello[i].classList.remove("highlight");
        } else {
            hello[i].classList.add("highlight");
        }
    }
}