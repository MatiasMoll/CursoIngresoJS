function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	

	primerNumero = prompt ("Ingrese el primer numero:");
	segundoNumero = prompt ("Ingrese el segundo numero:");

	primerNumeroEntero = parseInt(primerNumero);
	segundoNumeroEntero = parseInt(segundoNumero);
	
		if(primerNumeroEntero == segundoNumeroEntero)
		{
			alert(primerNumeroEntero + segundoNumeroEntero);
		}else if (primerNumeroEntero>segundoNumeroEntero)
			{
				alert(primerNumeroEntero - segundoNumeroEntero);
			}
			else
			{
				if((primerNumeroEntero+segundoNumeroEntero)>10)
				{
					resultado = primerNumeroEntero + segundoNumeroEntero;
					alert("La suma es " + resultado + " y supero el 10");
				}
				else
				{
					alert(primerNumeroEntero + segundoNumeroEntero);
				}

			}	

}

