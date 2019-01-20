function iniciarJogo() {
	var nivel = document.querySelector("#nivel").value;
	window.location.href = "jogo.html?" + nivel;
}