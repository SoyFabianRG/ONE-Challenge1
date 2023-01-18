var mensajeEntrada = document.querySelector("textarea#entrada");
var mensajeSalida = document.querySelector("textarea#salida");

function copiarMensaje()
{
    if (mensajeEntrada.value.length === 0)
    {
        mensajeSalida.innerHTML = "¡Primero necesita introducir un mensaje!";
    }

    else
    {
        var textoCopiado = mensajeSalida.innerHTML;
        navigator.clipboard.writeText(textoCopiado).then(() => {mensajeSalida.innerHTML = "¡Su mensaje ha sido copiado en el portapapeles!";});
    }
}