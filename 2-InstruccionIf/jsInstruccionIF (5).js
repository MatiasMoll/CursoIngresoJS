function mostrar()
{
//tomo la edad  
	var edad;
	var edadEntero;
	var adolescente;

	edad = document.getElementById('edad').value;
	edadEntero = parseInt(edad);
	adolescente = (edadEntero >= 13 && edadEntero <= 17);

	if(!adolescente)
	{
		alert("No sos adolescente");
	}



		
}//FIN DE LA FUNCIÓN