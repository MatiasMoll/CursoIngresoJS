function mostrar()
{
	var nota;
	var notaTotal=0;
	var sexo;
	var promedio=0;
	var menorNota=0;
	var	menorSexo;
	var varonesAprobado=0;
	var contador=0;

	while(contador<5)
	{
		contador++;
		nota = prompt("Ingrese una nota");
		nota = parseInt(nota);
		while(isNaN(nota) || nota <0 || nota>10)
		{
			nota = prompt("Nota invalida, reingrese una nota");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese una sexo");
		while(!isNaN(sexo) || sexo!="f" && sexo!="m")
		{
			sexo = prompt("sexo invalida, reingrese una sexo");
		}
		alert("Nota y sexo ingresado correctamente");	

		notaTotal += nota;
		if(contador == 1)
		{
			menorNota = nota;
			menorSexo = sexo;
		}else
			{
				if(menorNota>nota)
				{
					menorNota = nota;
					menorSexo = sexo;
				}
			}
		if(nota>5 && sexo == "m")
		{
			varonesAprobado ++;
		}	
	}
	promedio = notaTotal / 5;

	alert("El promedio de las notas es de "+promedio+" la nota mas baja es "+menorNota+" y su sexo es "+menorSexo+" y la cantidad de varones aprobados es "+varonesAprobado);

}
