function mostrar()
{
//tomo la edad  
<<<<<<< HEAD
=======
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
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3
	
	var laEdad;
	var situacionConyugal;

	laEdad = edad.value;
	edadEntero = parseInt(laEdad);
	situacionConyugal = estadoCivil.options.value;


	alert(situacionConyugal);





}//FIN DE LA FUNCIÓN