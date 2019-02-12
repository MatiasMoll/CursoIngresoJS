function mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edadEntera = parseInt(edad);

	if(edadEntera>17)
	{
		alert("Sos mayor de edad");
	}


}//FIN DE LA FUNCIÓN