const display = document.getElementById("display");
const todosOsBotoes = document.querySelectorAll("button");

let botao0 = null;
let botao1 = null;
let botao2 = null;
let botao3 = null;
let botao4 = null;
let botao5 = null;
let botao6 = null;
let botao7 = null;
let botao8 = null;
let botao9 = null;
let botaoC = null;
let botaoIgual = null;
let botaoSoma = null;
let botaoSubtracao = null;
let botaoMultiplicacao = null;
let botaoDivisao = null;
let botaoPonto = null;

for (let botao of todosOsBotoes){
    switch (botao.textContent) {
        case "0":
            botao0 = botao;
            break;
        case "1": 
            botao1 = botao; 
            break;
        case "2":
            botao2 = botao;
            break;
        case "3":
            botao3 = botao;
            break;
        case "4":
            botao4 = botao;
            break;
        case "5":
            botao5 = botao;
            break;
        case "6":
            botao6 = botao;
            break;
        case "7":
            botao7 = botao;
            break;
        case "8":
            botao8 = botao;
            break;
        case "9":
            botao9 = botao;
            break;
        case "C":
            botaoC = botao;
            break;
        case "=":
            botaoIgual = botao;
            break;
        case "+":
            botaoSoma = botao;
            break;
        case "-":
            botaoSubtracao = botao;
            break;
        case "*":
            botaoMultiplicacao = botao;
            break;
        case "/":
            botaoDivisao = botao;
            break;
        case ".":
            botaoPonto = botao;
            break;
    }
}

function adicionarValorDisplay(valor){
    if (display.value === "0")
        display.value = valor;
    else
        display.value += valor;
}

function numeros(){
    botao0.addEventListener('click', () => adicionarValorDisplay('0'));
    botao1.addEventListener('click', () => adicionarValorDisplay('1'));
    botao2.addEventListener('click', () => adicionarValorDisplay('2'));
    botao3.addEventListener('click', () => adicionarValorDisplay('3'));
    botao4.addEventListener('click', () => adicionarValorDisplay('4'));
    botao5.addEventListener('click', () => adicionarValorDisplay('5'));
    botao6.addEventListener('click', () => adicionarValorDisplay('6'));
    botao7.addEventListener('click', () => adicionarValorDisplay('7'));
    botao8.addEventListener('click', () => adicionarValorDisplay('8'));
    botao9.addEventListener('click', () => adicionarValorDisplay('9'));
    botaoPonto.addEventListener('click', () => adicionarValorDisplay('.'));
    botaoC.addEventListener('click', () => display.value = "0");
}

function operacoes(){
    botaoSoma.addEventListener('click', () => adicionarValorDisplay('+'));
    botaoSubtracao.addEventListener('click', () => adicionarValorDisplay('-'));
    botaoMultiplicacao.addEventListener('click', () => adicionarValorDisplay('*'));
    botaoDivisao.addEventListener('click', () => adicionarValorDisplay('/'));
    botaoIgual.addEventListener('click', () => display.value = result(display.value));
}

function result(valor) {
    let conta = 0;
    let conta2 = 0;
    let operacao = null;
    let flag = 0;
    let numStr = '';

    for (let i = 0; i < valor.length; i++) {
        let c = valor[i];
        if ((c >= '0' && c <= '9') || c === '.') {
            numStr += c;
        } else if ((c === '+' || c === '-' || c === '*' || c === '/') && flag === 0) {
            conta = parseFloat(numStr);
            numStr = '';
            operacao = c;
            flag = 1;
        }
    }

    conta2 = parseFloat(numStr);

    let resultado = 0;

    if (operacao === '+') resultado = conta + conta2;
    else if (operacao === '-') resultado = conta - conta2;
    else if (operacao === '*') resultado = conta * conta2;
    else if (operacao === '/') resultado = conta / conta2;

    return resultado;
}



function calculadora() {
    numeros();
    operacoes();
}

calculadora();
