function fechar() {
	document.getElementById("check").checked = false;
}
var boton = document.getElementById('buttonEnviar').addEventListener('click', validar);
function validar() {
	let nombre = document.getElementById("nome");
	let correo = document.getElementById('email');
	let texto = document.getElementById('text');
	if (nombre.value.trim() || correo.value.trim() || texto.value.trim()== '') {
		document.getElementById('completaNome').style.display = "block";
	} else {
		document.getElementById('mensagemEnviado').style.display = "block";
	}
}

