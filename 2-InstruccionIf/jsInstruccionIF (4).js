function mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edadEntero = parseInt(edad);

	if(edadEntero>= 13 && edadEntero <= 17)
	{
		alert("Sos adolescente");
	}




}//FIN DE LA FUNCIÓN