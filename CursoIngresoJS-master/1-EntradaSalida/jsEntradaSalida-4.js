/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;

	dato = prompt ("Cual es tu nombre: ");

	//elNombre.value = dato;
	document.getElementById('elNombre').value = dato;
	
		

}

	