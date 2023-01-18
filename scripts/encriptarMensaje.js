var botonEncriptar = document.querySelector("button#encriptar");
var botonDesencriptar = document.querySelector("button#desencriptar");

var botonCopiar = document.getElementById("button#copiar");
var botonEliminar = document.getElementById("button#eliminar");

var mensajeEntrada = document.querySelector("textarea#entrada");
var mensajeSalida = document.querySelector("textarea#salida");

function encriptarMensaje()
{
    let text = mensajeEntrada.value;

    if (/[A-Z-À-Ú-à-ù]/.test(text))
    {
        mensajeSalida.innerHTML = "¡Vaya, parece que has usado mayúsculas o tildes!"
    }

    else if (mensajeEntrada.value === '')
    {
        mensajeSalida.innerHTML = "El campo está vacío"
    }

    else
    {
        var txt = text.replace(/e/g, "enter");
        var txt = txt.replace(/i/g, "imes");
        var txt = txt.replace(/a/g, "ai");
        var txt = txt.replace(/o/g, "ober");
        var txt = txt.replace(/u/g, "ufat");

        mensajeSalida.innerHTML = `${txt}`;
    }
}