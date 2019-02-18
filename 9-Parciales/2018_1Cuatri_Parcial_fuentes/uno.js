
function mostrar()
{
<<<<<<< HEAD
	var alto;
	var ancho;
	var perimetro;
=======
	var altura;
	var ancho;
	var perimetro;

	altura = prompt("Ingrese la altura:");
	ancho = prompt ("Ingrese el ancho:");
	
	alturaEnMts = parseInt(altura);
	anchoEnMts = parseInt(ancho);
	perimetro = 2*(alturaEnMts + anchoEnMts);

	alert("El perimetro es " + perimetro );
>>>>>>> 449ef8ee6ad974edbc8b935b2634bda43c967ace

	alto = prompt ("Ingrese el alto en mts");
	ancho = prompt ("A continuacion ingrese el ancho");

	altoEnMts = parseInt(alto);
	anchoEnMts = parseInt(ancho);

	perimetro = 2*(alto + ancho);

	alert(perimetro);
}
