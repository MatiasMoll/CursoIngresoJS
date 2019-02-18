function mostrar()
{
	var primerNumero;
	var segundoNumero;
<<<<<<< HEAD
	var	primerNumeroEntero;
	var segundoNumeroEntero; 
	var resultado;

	primerNumero = prompt("Ingrese el primer numero.");
	segundoNumero = prompt("Ingrese el segundo numero.");
	primerNumeroEntero = parseInt(primerNumero);
	segundoNumeroEntero = parseInt(segundoNumero);

	resultado = primerNumeroEntero + segundoNumeroEntero;


	if (primerNumero == segundoNumero)
	{
		alert(primerNumero + segundoNumero);

	}else if (primerNumeroEntero > segundoNumeroEntero)
	 {
	 	alert (primerNumeroEntero - segundoNumeroEntero	);
	 } else if (resultado > 10)
	 	{
	 		alert("la suma es "+ resultado + " y supero el 10");
	 	}else
	 	{
	 		alert(resultado);
	 	}

=======
	var resultado;
	
>>>>>>> 449ef8ee6ad974edbc8b935b2634bda43c967ace

	primerNumero = prompt ("Ingrese el primer numero:");
	segundoNumero = prompt ("Ingrese el segundo numero:");

	primerNumeroEntero = parseInt(primerNumero);
	segundoNumeroEntero = parseInt(segundoNumero);
	
		if(primerNumero == segundoNumero)
		{
			alert(primerNumero + segundoNumero);
		}else if (primerNumeroEntero>segundoNumeroEntero)
			{
				alert(primerNumeroEntero - segundoNumeroEntero);
			}
			else
			{
				alert(primerNumeroEntero + segundoNumeroEntero);
				if((primerNumeroEntero+segundoNumeroEntero)>10)
				{
					resultado = primerNumeroEntero + segundoNumeroEntero;
					alert("La suma es " + resultado "y supero el 10");
				}
			}	
}

