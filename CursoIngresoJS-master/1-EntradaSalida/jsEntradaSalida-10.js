/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	

	importe = document.getElementById('importe').value;
	

	descuento = importe * 0.75;
	

	resultado.value = descuento;

}
