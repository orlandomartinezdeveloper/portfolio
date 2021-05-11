document.addEventListener('DOMContentLoaded', geralDoc);
function geralDoc() {
	// Declaração de Variáveis
	var linkHome = document.getElementById('linkHome').addEventListener('click', margenHome);
	var linkFormacao = document.getElementById('linkMenuForma').addEventListener('click', margenForma);
	var linkExperiencia = document.getElementById('linkMenuExp').addEventListener('click', margenExp);
	var linkPro = document.getElementById('linkMenuPro').addEventListener('click', margenPro);
	var linkFormacaoP = document.getElementById('formacao');
	var linkExperiencia = document.getElementById('experiencia');
	var linkProjetos = document.getElementById('projetos');

	// Funções para a margem superior em relação ao menu fixo
	function margenHome() {
		linkFormacaoP.style.paddingTop = "0";
		linkExperiencia.style.paddingTop = "0";
		linkProjetos.style.paddingTop = "0";
	}
	function margenForma() {
		linkFormacaoP.style.paddingTop = "100px";
		linkExperiencia.style.paddingTop = "0";
		linkProjetos.style.paddingTop = "0";
	}
	function margenExp() {
		linkFormacaoP.style.paddingTop = "0";
		linkExperiencia.style.paddingTop = "100px";
		linkProjetos.style.paddingTop = "0";
	}
	function margenPro() {
		linkFormacaoP.style.paddingTop = "0";
		linkExperiencia.style.paddingTop = "0";
		linkProjetos.style.paddingTop = "100px";
	}
	function margenContato() {
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
		if (nombre.value.trim() || correo.value.trim() || texto.value.trim() == '') {
			document.getElementById('completaNome').style.display = "block";
		} else {
			document.getElementById('mensagemEnviado').style.display = "block";
		}
	}

	// Função para fechar o menu mobile
	function fechar() {
		document.getElementById("check").checked = false;
	}
	// Abrir API github
	fetch('https://api.github.com/users/orlandomartinezdeveloper/repos')
		.then(resp => resp.json())
		.then(dados => {
			for (let i = 0; i < 6; i++) {
				newLine(dados[i], "bodyTab")
			}
		});

	//Seleção de section e criação de elementos HTML para adicionar Repo:Github
	function newLine(dado, ident) {
		let corpo = document.getElementById(`${ident}`);
		let line = document.createElement('tr');
		let repo = document.createElement('td');


		let linksRepo = document.createElement('a')
		linksRepo.target = "_blank";
		linksRepo.href = dado.svn_url;
		linksRepo.textContent = dado.svn_url;

		repo.appendChild(linksRepo);
		line.appendChild(repo);
		return corpo.append(line);
	}
}
