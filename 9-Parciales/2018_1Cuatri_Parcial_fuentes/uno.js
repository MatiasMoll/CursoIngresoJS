
function mostrar()
{
	var alto;
	var ancho;
	var perimetro;

	alto = prompt ("Ingrese el alto en mts");
	ancho = prompt ("A continuacion ingrese el ancho");

	altoEnMts = parseInt(alto);
	anchoEnMts = parseInt(ancho);

	perimetro = 2*(alto + ancho);

	alert(perimetro);
}
