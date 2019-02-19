function mostrar()
{

var clave = prompt("ingrese el número clave.");
var claveSecreta = "utn750";

	while(clave != claveSecreta)
	{
		clave = prompt("Clave incorrecta, reintente: ");
	}

	alert("Felicidades ha ingresado al sistema");



}//FIN DE LA FUNCIÓN
