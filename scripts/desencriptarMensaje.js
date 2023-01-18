var mensajeEntrada = document.querySelector("textarea#entrada");
var mensajeSalida = document.querySelector("textarea#salida");


function desencriptarMensaje()
{
    var text = mensajeEntrada.value;

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
        var txt = text.replace(/enter/g, "e");
        var txt = txt.replace(/imes/g, "i");
        var txt = txt.replace(/ai/g, "a");
        var txt = txt.replace(/ober/g, "o");
        var txt = txt.replace(/ufat/g, "u");

        mensajeSalida.innerHTML = `${txt}`;
    }
}