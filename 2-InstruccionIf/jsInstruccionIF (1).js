function mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edadEntero = parseInt(edad);

	if(edadEntero == 15)
	{
		alert("niña bonita");
	}
	else
	{
		alert("niña fea");
	}

}//FIN DE LA FUNCIÓN