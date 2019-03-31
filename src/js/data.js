	// Funciones
	const addChore = () =>{
		const chores = choresInput.value,
			newChore = document.createElement("li"),
			linkEd = document.createElement("a"),
			content = document.createTextNode(chores);

		if (chores === "") {
			choresInput.setAttribute("placeholder", "Agrega una tarea valida");
			choresInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		linkEd.appendChild(content);
		// Le establecemos un atributo href
		linkEd.setAttribute("href", "#");
		// Agregamos el enlace (a) a la nueva tarea (li)
		newChore.appendChild(linkEd);
		// Agregamos la nueva tarea a la listData
		listData.appendChild(newChore);

		choresInput.value = "";

		for (let i = 0; i <= listData.children.length -1; i++) {
			listData.children[i].addEventListener("click", function() {
				this.parentNode.removeChild(this);
			});
		}

	};
	const checkInput = () => {
		choresInput.className = "";
		textInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	const deleteChore = () => {
		this.parentNode.removeChild(this);
	};
