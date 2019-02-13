function mostrar()
{
  	var recargoEntero;
  	var precioFinalTarjeta;

  	precioEfectivo = elNombre.value;

  	precioEfectivoEntero = parseInt(precioEfectivo);
  	recargoEntero = precioEfectivoEntero * 10 / 100;
  	precioFinalTarjeta = precioEfectivoEntero + recargoEntero;

  	alert("el precio del producto en efectivo es $"+precioEfectivo+", con tarjeta tiene un recargo del 10% que seria $"+recargoEntero+" de recargo costandole final $"+precioFinalTarjeta);
}
