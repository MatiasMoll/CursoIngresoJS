function mostrar()
{
<<<<<<< HEAD
	var valor;
	var descuentoDeseado;
	var precioFinal;

	valor = prompt ("Ingrese el precio");
	descuentoDeseado = prompt ("Y el descuento deseado");
	descuentoFinal = valor * descuentoDeseado / 100;
	precioFinal = valor - descuentoFinal;

	elPrecioFinal.value = precioFinal;
=======
	var precio;
	var descuentoPorcentaje;
	var descuentoEntero;
	var precioConDescuento;

	precio = prompt ("Ingrese un precio:");
	descuentoPorcentaje = prompt ("Ingrese el descuento: ");

	descuentoEntero = precio * descuentoPorcentaje / 100;
	precioConDescuento = precio - descuentoEntero;

	elPrecioFinal.value = precioConDescuento;
>>>>>>> 449ef8ee6ad974edbc8b935b2634bda43c967ace

}
