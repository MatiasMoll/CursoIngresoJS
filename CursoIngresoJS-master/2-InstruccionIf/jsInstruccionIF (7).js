function mostrar()
{
//tomo la edad  
	var años;
	var añosEntero;
	var situacionPareja;

	años = edad.value;
	añosEntero = parseInt(años);

	if(añosEntero < 18 && estadoCivil.value != "Soltero")
	{
		alert("'Es muy pequeño para NO ser soltero.");	
	}


	


}//FIN DE LA FUNCIÓN