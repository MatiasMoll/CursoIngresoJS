function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo != "f" && sexo != "m")
	{
		alert("Sexo Invalido");
		sexo = prompt("Ingrese f o m");
	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN