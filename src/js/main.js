	// Variables
	const listData = document.getElementById("lista"),
		choresInput = document.getElementById("chores-input"),
		btnNewChore = document.getElementById("btn-agregar");

	// Eventos

	// Agregar Tarea
	btnNewChore.addEventListener("click", addChore);

	// Comprobar Input
	choresInput.addEventListener("click", checkInput);

	// Borrando Elementos de la listData
	for (var i = 0; i <= listData.children.length -1; i++) {
		listData.children[i].addEventListener("click", deleteChore);
}