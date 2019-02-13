function mostrar()
{
	var precio;
	var descuentoPorcentaje;
	var descuentoEntero;
	var precioConDescuento;

	precio = prompt ("Ingrese un precio:");
	descuentoPorcentaje = prompt ("Ingrese el descuento: ");

	descuentoEntero = precio * descuentoPorcentaje / 100;
	precioConDescuento = precio - descuentoEntero;

	elPrecioFinal.value = precioConDescuento;

}
