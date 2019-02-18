function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
<<<<<<< HEAD

	nota = Math.floor(Math.random() * 10)+1;

	if(nota > 8)
	{
		alert("Excelente");
	}else if (nota > 4 && nota < 9)
		{
			alert("Aprobo");
		}	
		else 
			{
				alert("Vamos, la proxima se puede");
			}
=======
	var resultado;

	nota = Math.floor(Math.random()*10)+1;
	if(nota<8)
	{
		resultado = "Vamos la proxima se puede";
		if(nota>4)
		{
			resultado = "Aprobo";
		}
	}else
	{
		resultado = "Excelente";
	}
	alert(resultado);
>>>>>>> 874ee5a34b8f6dc99d91051fa7d368af62fc74c3

}//FIN DE LA FUNCIÓN