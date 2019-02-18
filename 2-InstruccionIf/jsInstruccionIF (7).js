function mostrar()
{
//tomo la edad  
	var años;
<<<<<<< HEAD
	var añosEntero;
	var situacionPareja;

	años = edad.value;
	añosEntero = parseInt(años);

	if(añosEntero < 18 && opcion.value != Soltero)
	{
		alert("'Es muy pequeño para NO ser soltero.");	
	}

=======
	var situacionDePareja;
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3

	años = edad.value;
	situacionDePareja = estadoCivil.value;

	añosEnteros = parseInt(años);

	if(añosEnteros < 18 && situacionDePareja != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN