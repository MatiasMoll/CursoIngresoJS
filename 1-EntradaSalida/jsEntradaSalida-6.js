/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var	segundoNumero;
	var suma;

	primerNumero = parseInt(numeroUno.value);
	segundoNumero = parseInt(numeroDos.value);
	suma = primerNumero + segundoNumero;

	alert("La suma es " +suma);
}

