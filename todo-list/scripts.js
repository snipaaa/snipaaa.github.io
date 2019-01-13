var listElement = document.querySelector("#lista ul");
var buttonElement = document.querySelector("#criar button");
var inputElement = document.querySelector("#criar input");

var lista = JSON.parse(localStorage.getItem("lista")) || [];

function loadList(){
	listElement.innerHTML = "";
	
	for (item of lista) {
		var li = document.createElement("li");
		var li_text = document.createTextNode(item + " ");
		
		var excluir = document.createElement("a");
		excluir.setAttribute("href", "#")
		var pos = lista.indexOf(item);
		excluir.setAttribute("onclick", "removeTarefa("+ pos +")")
		var excluir_text = document.createTextNode("Remover");
		
		excluir.appendChild(excluir_text);
		
		li.appendChild(li_text);
		li.appendChild(excluir);
		listElement.appendChild(li);
	}
}

loadList()

buttonElement.onclick = function(){
	var tarefa = inputElement.value;
	
	if (!tarefa) return;
	
	lista.push(tarefa);
	
	inputElement.value = "";
	
	save();
}

function removeTarefa(pos){
	lista.splice(pos, 1);
	save();
}

function save(){
	localStorage.setItem("lista", JSON.stringify(lista));
	loadList();
}