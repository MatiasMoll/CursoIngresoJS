function mostrar()
{
	var precio;
	var descuentoPorcentaje;
	var descuentoValor;
	var precioFinal;

	precio = prompt("Ingrese el precio del producto: ");
	precio = parseInt(precio);

	descuentoPorcentaje = prompt("Ingrese el descuento del producto: ");
	descuentoPorcentaje = parseInt(descuentoPorcentaje);

	descuentoValor = precio * descuentoPorcentaje / 100;
	precioFinal = precio - descuentoValor;

	alert("El precio del producto con el descuento pedido es de "+precioFinal);	
}
