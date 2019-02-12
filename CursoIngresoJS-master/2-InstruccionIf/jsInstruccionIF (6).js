function mostrar()
{
//tomo la edad  
	var años;
	var edadEntero;
	var adolescente;

	años = edad.value;
	edadEntero = parseInt(años);
	adolescente = edadEntero>12 && edadEntero<18;
	
	if(adolescente)
	{
		alert ("Adolescente");
	}else if (edadEntero > 17)
		{
			alert("Es mayor de edad");
		}
		else
		{
			alert("Es un niño");
		}

	/*
	Salva vidas:

	if(edadEntero<12)
	{
		alert("Es un niño/a");
	} 
	if(edadEntero>12 && edadEntero < 18)
	{
		alert("Es un adolescente");
	}
	if(edadEntero>17)
	{
		alert("Es mayor de edad");	
	}
	*/
	
}//FIN DE LA FUNCIÓN