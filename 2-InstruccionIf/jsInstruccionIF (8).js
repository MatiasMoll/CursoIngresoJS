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
		
	}else 
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN