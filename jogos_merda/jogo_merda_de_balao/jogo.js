var body = document.querySelector("body");
body.onload = function() {
	iniciarJogo();
}
var tempo_html = document.querySelector("#tempo");
var ganhou = false;
var margem = "10px";

function iniciarJogo() {
	var url = window.location.search;
	var nivel_jogo = url.replace("?", "");
	
	var tempo;
	var quantidade_balao;
	
	switch (parseInt(nivel_jogo)) {
		case 1:
			margem = "16px";
			tempo = 120;
			quantidade_balao = 50;
			break;
		case 2:
			margem = "12px";
			tempo = 60;
			quantidade_balao = 80;
			break;
		case 3:
			margem = "3px";
			tempo = 30;
			quantidade_balao = 140;
			break;
		default:
			tempo = 60;
	}
	
	tempo_html.innerHTML = "";
	tempo_html.innerHTML = tempo;
	
	criarBaloes(quantidade_balao);
	contagem_tempo(tempo);
}

function diminuir(segundos) {		
	segundos--;
	
	if (ganhou == true) {
		alert("Você ganhou!");
		window.location.href = "index.html";
		return;
	}
	
	if (segundos < 0) {
		alert("Você perdeu!");
		window.location.href = "index.html";
		return;
	}

	tempo_html.innerHTML = "";
	tempo_html.innerHTML = segundos;
	
	contagem_tempo(segundos);
}

function contagem_tempo(segundos) {
	segundos = parseInt(segundos);
	setTimeout("diminuir("+segundos+")", 1000)
}

function criarBaloes(quantidade) {
	
	for (var i = 1; i <= quantidade; i++) {
		var balao = document.createElement("img");
		balao.src = "imagens/balao_azul_pequeno.png";
		balao.style.margin = margem;
		balao.onclick = function() {
			estourar(this, quantidade)
		}
		
		document.querySelector("#cenario").appendChild(balao);
		document.querySelector("#quantidade_balao").innerHTML = quantidade;
		document.querySelector("#balao_estourados").innerHTML = 0;
	}
	
}

function estourar(balao, quantidade){
	//if (balao.estourado == true) {
		//return;
	//}
	
	balao.onclick = function() {}
	
	balao.estourado = true;
	balao.src = "imagens/balao_azul_pequeno_estourado.png";
	
	var estourados_text = document.querySelector("#balao_estourados");
	var estourados_count = parseInt(estourados_text.innerHTML);
	var soma = ++estourados_count;
	document.querySelector("#balao_estourados").innerHTML = soma;
	
	var quantidade_balao = document.querySelector("#quantidade_balao");
	var quantidade_count = parseInt(quantidade_balao.innerHTML);
	var quantidade_soma = --quantidade_count;
	document.querySelector("#quantidade_balao").innerHTML = quantidade_soma;
	
	if (soma == quantidade) {
		ganhou = true;
	}
}