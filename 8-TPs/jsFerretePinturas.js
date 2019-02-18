/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var centigrado;

	farenheit = Temperatura.value;
	farenheitEntero = parseFloat(farenheit);

	centigrado = (farenheitEntero - 32) * 0.5555555555555555555;

	alert(farenheitEntero+"ºF es equivalente a " + centigrado + "ºC");

}

function CentigradosFahrenheit () 
{
	var farenheit;
	var centigrado;

	centigrado = Temperatura.value;
	centigradoEntero = parseFloat(centigrado);

	farenheit = (centigradoEntero * 1.8) + 32;

	alert(centigradoEntero+"ºC es equivalente a " + farenheit + "ºF");
}
