// Declaração de Variáveis
var linkHome = document.getElementById('linkHome').addEventListener('click', margenHome);
var linkFormacao = document.getElementById('linkMenuForma').addEventListener('click', margenForma);
var linkExperiencia = document.getElementById('linkMenuExp').addEventListener('click', margenExp);
var linkPro = document.getElementById('linkMenuPro').addEventListener('click', margenPro);
var linkFormacaoP = document.getElementById('formacao');
var linkExperiencia = document.getElementById('experiencia');
var linkProjetos = document.getElementById('projetos');

// Funções para a margem superior em relação ao menu fixo
function margenHome(){
	linkFormacaoP.style.paddingTop = "0";
	linkExperiencia.style.paddingTop = "0";
	linkProjetos.style.paddingTop = "0";
}
function margenForma(){
	linkFormacaoP.style.paddingTop = "100px";
	linkExperiencia.style.paddingTop = "0";
	linkProjetos.style.paddingTop = "0";
}
function margenExp(){
	linkFormacaoP.style.paddingTop = "0";
	linkExperiencia.style.paddingTop = "100px";
	linkProjetos.style.paddingTop = "0";
}
function margenPro(){
	linkFormacaoP.style.paddingTop = "0";
	linkExperiencia.style.paddingTop = "0";
	linkProjetos.style.paddingTop = "100px";
}
function margenContato(){
	linkFormacaoP.style.paddingTop = "0";
	linkExperiencia.style.paddingTop = "0";
	linkProjetos.style.paddingTop = "0";
}

// Validação do Formulário
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

// Função para fechar o menu mobile
function fechar() {
	document.getElementById("check").checked = false;
}
