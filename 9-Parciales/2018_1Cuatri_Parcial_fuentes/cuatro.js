function mostrar()
{
<<<<<<< HEAD
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

=======
	var valorCompra;
	var pagoConTarjeta;
	var productosComprados;
	var importeFinal;
		
	productosComprados = prompt("Ingrese la cantidad de productos comprados");
	valorCompra = prompt("Ingrese el valor de la compra");
	pagoConTarjeta = prompt("Pago con tarjeta?");
	importeFinal = valorCompra;

	if (productosComprados > 2)
	{
		if(valorCompra > 2000)
		{
			importeFinal = valorCompra * 0.75;
		} else 
		{
			importeFinal = valorCompra * 0.90;
		}
	}
	if(pagoConTarjeta =="si")
	{
		importeFinal = importeFinal * 1.1;
	}
	alert("El valor de la compra es "+importeFinal); 
	
	/* por que  if else?-*//*Si es un solo producto tambien tiene recargo por tarjeta?*/
	
		/* un solo alert en todo el codigo*/

}
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3
