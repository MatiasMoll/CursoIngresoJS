function mostrar()
{
//tomo la edad  
	
	var laEdad;
	var situacionConyugal;

	laEdad = edad.value;
	edadEntero = parseInt(laEdad);
	situacionConyugal = estadoCivil.value;
	
	if(edadEntero<18 && situacionConyugal!= "Soltero")
	{

	}else if (edadEntero>17 && situacionConyugal == "Soltero")
		{
			alert("Es soltero y no es menor");
		}
	

	

	



}//FIN DE LA FUNCIÓN