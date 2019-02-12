function mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edadEntero = parseInt(edad);
	
	if(edadEntero>17)
	{
		alert("Sos mayor de edad");
	}	
	else
	{
		alert("Sos menor de edad");
	}

}//FIN DE LA FUNCIÓN