var cookie = document.querySelector("#cookie");
var cookie_quantidade = document.querySelector("#num-contagem");
var upgrades = [];
upgrades["mouse"] = 1;
upgrades["mouse-custo"] = 20;
upgrades["fazenda"] = 0;
upgrades["fazenda-mult"] = 1;
upgrades["fazenda-custo"] = 400;
upgrades["industria"] = 0;
upgrades["industria-mult"] = 1;
upgrades["industria-custo"] = 3000;

cookie.onclick = function() {
	var quantidade = parseInt(cookie_quantidade.innerHTML);
		
	cookie_quantidade.innerHTML = "";
	cookie_quantidade.innerHTML = quantidade + upgrades["mouse"];
}

var upgrade_mouse = document.querySelector("#up-mouse");
var mouse_level = document.querySelector("#up-mouse-level");
var mouse_up_button = document.querySelector("#up-mouse");
upgrade_mouse.onclick = function() {
	var custo = upgrades["mouse"] * upgrades["mouse-custo"]
	var quantidade = parseInt(cookie_quantidade.innerHTML);
	
	if (quantidade >= custo) {
		quantidade = quantidade - custo;
		upgrades["mouse"]++;
		
		mouse_level.innerHTML = "";
		mouse_level.innerHTML = upgrades["mouse"];
		
		mouse_up_button.innerHTML = "";
		mouse_up_button.innerHTML = "$" + (upgrades["mouse"] * upgrades["mouse-custo"]);
		
		cookie_quantidade.innerHTML = "";
		cookie_quantidade.innerHTML = quantidade;	
	}

}

var upgrade_fazenda = document.querySelector("#up-fazenda");
var fazenda_level = document.querySelector("#up-fazenda-level");
var fazenda_up_button = document.querySelector("#up-fazenda");
upgrade_fazenda.onclick = function() {
	var custo = upgrades["fazenda-mult"] * upgrades["fazenda-custo"]
	var quantidade = parseInt(cookie_quantidade.innerHTML);
	
	if (quantidade >= custo) {
		quantidade = quantidade - custo;
		upgrades["fazenda"]++;
		upgrades["fazenda-mult"]++;
		cookiePs += 1;
		
		fazenda_level.innerHTML = "";
		fazenda_level.innerHTML = upgrades["fazenda"];
		
		fazenda_up_button.innerHTML = "";
		fazenda_up_button.innerHTML = "$" + (upgrades["fazenda-mult"] * upgrades["fazenda-custo"]);
		
		cookie_quantidade.innerHTML = "";
		cookie_quantidade.innerHTML = quantidade;
		
		cookiePs_element.innerHTML = "";
		cookiePs_element.innerHTML = cookiePs + "s";
	}

}

var upgrade_industria = document.querySelector("#up-industria");
var industria_level = document.querySelector("#up-industria-level");
var industria_up_button = document.querySelector("#up-industria");
upgrade_industria.onclick = function() {
	var custo = upgrades["industria-mult"] * upgrades["industria-custo"]
	var quantidade = parseInt(cookie_quantidade.innerHTML);
	
	if (quantidade >= custo) {
		quantidade = quantidade - custo;
		upgrades["industria"]++;
		upgrades["industria-mult"]++;
		cookiePs += 20;
		
		industria_level.innerHTML = "";
		industria_level.innerHTML = upgrades["industria"];
		
		industria_up_button.innerHTML = "";
		industria_up_button.innerHTML = "$" + (upgrades["industria-mult"] * upgrades["industria-custo"]);
		
		cookie_quantidade.innerHTML = "";
		cookie_quantidade.innerHTML = quantidade;
		
		cookiePs_element.innerHTML = "";
		cookiePs_element.innerHTML = cookiePs + "s";
	}

}

var cookiePs = 0;
var cookiePs_element = document.querySelector("#cookieps");

function cookiePsLoad() {
	var cookies = parseInt(cookie_quantidade.innerHTML);
	cookies += cookiePs;
	
	cookie_quantidade.innerHTML = "";
	cookie_quantidade.innerHTML = cookies;
}

var cookiePsPs = setInterval(cookiePsLoad, 1000)