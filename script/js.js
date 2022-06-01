const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;
        if (operador == '+'){
            atualizar (numeroAnterior + numeroAtual);
        }else if (operador == '-'){
            atualizar (numeroAnterior - numeroAtual);
        }
        else if (operador == '*'){
            atualizar (numeroAnterior * numeroAtual);
        }
        else if (operador == '/'){
            atualizar (numeroAnterior / numeroAtual);
        }
    }
}

const atualizar = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizar(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const inserirOperador = (evento) => {
    if (!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
    }
}
operadores.forEach(operador => operador.addEventListener('click', inserirOperador));

const calcularIgual = () => {
    calcular();
    operador = undefined;
}
document.getElementById('equal').addEventListener('click', calcularIgual);

const limparDisplay = () => display.textContent ='';
document.getElementById('ce').addEventListener('click', limparDisplay);

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('c').addEventListener('click', limparCalculo);

const removeLast = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removeLast);