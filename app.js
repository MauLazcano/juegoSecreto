let numeroSecreto = 0;
let intentos = 0;
let numSorteado = [];
let numMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    if (numeroUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if (numeroUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'El número secreto es menor')
        }
        else
        {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto()
{
    let numGenerado = Math.floor(Math.random()*numMaximo)+1;
    if(numSorteado.length == numMaximo)
    {
        asignarTextoElemento('p', 'Todos los números posibles han sido sorteados');
    }
    else
    {
        if (numSorteado.includes(numGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            numSorteado.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}
function reiniciarJuego()
{
    limpiarCaja();
    configIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function configIniciales()
{
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `'Indica un número entre 1 y ${numMaimo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

configIniciales();