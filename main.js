var botonEncriptar = document.querySelector("button#botonEncriptar");
var botonDesencriptar = document.querySelector("button#botonDesencriptar");

var botonCopiar = document.getElementById("button#botonCopiar");
var botonEliminar = document.getElementById("button#botonEliminar");

var mensajeEntrada = document.querySelector("textarea#textoEntrada");
var mensajeSalida = document.querySelector("textarea#textoSalida");

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;

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

		document.getElementById('copiar').innerHTML = '<button class="botonCopiar" onclick="copiarMensaje()"> Copiar </button>';
		document.getElementById('eliminar').innerHTML = '<button class="botonEliminar" onclick="eliminarMensaje()"> Eliminar </button>';
	}
}

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

		document.getElementById('copiar').innerHTML = '<button class="botonCopiar" onclick="copiarMensaje()"> Copiar </button>';
		document.getElementById('eliminar').innerHTML = '<button class="botonEliminar" onclick="eliminarMensaje()"> Eliminar </button>';
	}
}

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