const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacionActual = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valorBoton = boton.innerText;

        if (boton.id === 'borrar' || valorBoton === 'C') {
            operacionActual = '';
            pantalla.value = '';
        }

        else if (boton.id === 'igual' || valorBoton === '=') {
            try {
                let resultado = eval(operacionActual);
                pantalla.value = resultado;
                operacionActual = resultado.toString();
            } catch (error) {
                pantalla.value = 'Error';
                operacionActual = '';
            }
        }

        else {
            let valorEscribir = valorBoton;
            if(boton.id === 'sumar') valorEscribir = '+';
            if(boton.id === 'restar') valorEscribir = '-';
            if(boton.id === 'multiplicar') valorEscribir = '*';
            if(boton.id === 'dividir') valorEscribir = '/';

            operacionActual += valorEscribir;
            pantalla.value = operacionActual;
        }
});
});
