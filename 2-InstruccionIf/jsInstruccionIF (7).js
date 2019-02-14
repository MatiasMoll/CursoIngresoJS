function mostrar()
{
//tomo la edad  
	var años;
	var situacionDePareja;

	años = edad.value;
	situacionDePareja = estadoCivil.value;

	añosEnteros = parseInt(años);

	if(añosEnteros < 18 && situacionDePareja != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN