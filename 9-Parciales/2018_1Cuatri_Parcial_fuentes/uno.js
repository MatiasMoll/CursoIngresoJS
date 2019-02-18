
function mostrar()
{
<<<<<<< HEAD
<<<<<<< HEAD
	var alto;
	var ancho;
	var perimetro;
=======
	var altura;
	var ancho;
	var perimetro;
=======
	var primerNombre;
	var segundoNombre;
	var primerEdad;
	var segundaEdad;
	var suma;

	primerNombre = prompt("Ingrese su nombre.");
	segundoNombre = prompt("Ingrese el nombre de su compañero.");

	primerEdad = prompt("Ingrese su edad");
	segundaEdad = prompt("Ingrese la edad de su compañero");

	primerEdadEntera = parseInt(primerEdad);
	segundaEdadEntera = parseInt(segundaEdad);

	suma = primerEdadEntera + segundaEdadEntera;

	alert("ustedes son "+primerNombre+" y "+segundoNombre+", sus edades son "+primerEdadEntera+" y "+segundaEdadEntera+" y la suma de sus edades es " + suma);
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3

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
