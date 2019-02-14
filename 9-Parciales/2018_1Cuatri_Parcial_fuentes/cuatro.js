function mostrar()
{
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