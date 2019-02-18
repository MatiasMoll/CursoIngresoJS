function mostrar()
{
<<<<<<< HEAD
<<<<<<< HEAD
  var identificacion;
  var lugarDeResidencia;

  identificacion = elNombre.value;
  lugarDeResidencia = laLocalidad.value;

  alert("Usted es " + identificacion +" y vive en la localidad de " + lugarDeResidencia);
=======
  	var nombre;
  	var localidad;

  	nombre = elNombre.value;
  	localidad = laLocalidad.value;

  	alert("Usted es " + nombre + " y vive en la localidad " + localidad);

>>>>>>> 449ef8ee6ad974edbc8b935b2634bda43c967ace
=======
  	var recargoEntero;
  	var precioFinalTarjeta;

  	precioEfectivo = elNombre.value;

  	precioEfectivoEntero = parseInt(precioEfectivo);
  	recargoEntero = precioEfectivoEntero * 10 / 100;
  	precioFinalTarjeta = precioEfectivoEntero + recargoEntero;

  	alert("el precio del producto en efectivo es $"+precioEfectivo+", con tarjeta tiene un recargo del 10% que seria $"+recargoEntero+" de recargo costandole final $"+precioFinalTarjeta);
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3
}
