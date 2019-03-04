
function mostrar()
{
	var ancho;
	var largo;
	var resultado;

	ancho = prompt("Ingrese el ancho: ");
	ancho = parseInt(ancho);

	largo = prompt("Ingrese el largo: ");
	largo = parseInt(largo);

	resultado = 2*(largo + ancho);

	alert("El perimetro es: "+resultado);
}
