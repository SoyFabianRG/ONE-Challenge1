var mensajeEntrada = document.querySelector("textarea#entrada");
var mensajeSalida = document.querySelector("textarea#salida");

function eliminarMensaje()
{
    if (mensajeEntrada.value.length === 0)
    {
        mensajeSalida.innerHTML = "¡Vaya, parece que aún no has encriptado ningún mensaje!";
    }

    else
    {
        mensajeEntrada.value = "";
        mensajeSalida.innerHTML = "¡Mensaje eliminado! ¿Quieres encriptar otro mensaje?";
    }
}