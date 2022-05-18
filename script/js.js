const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

const atualizar = (texto) => {
    display.textContent += texto
}

const inserirNumero = (evento) => atualizar(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

operador.forEach(operador => operador.addEventListener('click', inserirOperador));