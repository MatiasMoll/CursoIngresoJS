
function mostrar()
{
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

}
