function mostrar()
{
	var primerNumero;
	var segundoNumero;
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


}
