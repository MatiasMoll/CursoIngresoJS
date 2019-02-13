function mostrar()
{
	var valorCompra;
	var pagoConTarjeta;
		
	productosComprados = prompt("Ingrese la cantidad de productos comprados");
	valorCompra = prompt("Ingrese el valor de la compra");
	pagoConTarjeta = prompt("Pago con tarjeta?");

	if (productosComprados > 2)
	{
		valorCompra = valorCompra * 0.90;
		if(valorCompra > 2000)
		{
			valorCompra = valorCompra *0.85;
		}
		if(pagoConTarjeta == "Si")
		{
			valorCompra = valorCompra * 1.10;	
		}else
		{
			alert("El valor de la compra es " +valorCompra);	
		}
	}else if(pagoConTarjeta =="No")
		{
			alert("El valor de la compra es " + valorCompra);
		}
		else
		{
			valorCompra = valorCompra * 1.10;
			alert("El valor de la compra es " +valorCompra);
		}

}