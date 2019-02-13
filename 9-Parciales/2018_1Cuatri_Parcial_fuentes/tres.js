function mostrar()
{
	var valor;
	var descuentoDeseado;
	var precioFinal;

	valor = prompt ("Ingrese el precio");
	descuentoDeseado = prompt ("Y el descuento deseado");
	descuentoFinal = valor * descuentoDeseado / 100;
	precioFinal = valor - descuentoFinal;

	elPrecioFinal.value = precioFinal;

}
