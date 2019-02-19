
function mostrar()
{

	altura = prompt("Ingrese la altura:");
	ancho = prompt ("Ingrese el ancho:");
	
	alturaEnMts = parseInt(altura);
	anchoEnMts = parseInt(ancho);
	perimetro = 2*(alturaEnMts + anchoEnMts);

	alert("El perimetro es " + perimetro );
}