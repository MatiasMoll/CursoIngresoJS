function mostrar()
{
//tomo la edad  
	var edad;
	var adolescente;

	edad = document.getElementById('edad').value;
	edadEntero = parseInt(edad);
	adolescente = edadEntero>12 && edadEntero<18;

	if(adolescente)
	{
		alert("Sos adolescente");
	}




}//FIN DE LA FUNCIÓN