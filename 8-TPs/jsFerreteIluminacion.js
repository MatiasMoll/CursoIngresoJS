/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 
 	var marcaLamparitas;
 	var cantidadLamparitas;
 	var precio;
 	var impuesto;
 	var precioConDesc;

	
 	marcaLamparitas = Marca.value;	
 	cantidadLamparitas = parseInt(Cantidad.value);


	precioConDesc = 35 * cantidadLamparitas;
	precio = 35 * cantidadLamparitas;
	

 	if(cantidadLamparitas>5)	
 	{	

 		precioConDesc = precio / 2;
 	}else if(cantidadLamparitas == 5)
 		{
 			if(marcaLamparitas == "ArgentinaLuz")
 			{
 				precioConDesc = precio * 0.60;
 			}
 			else
 			{
 				precioConDesc = precio * 0.70;
 			}
 		}else if (cantidadLamparitas == 4)
 				{
 					if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
 					{
 						precioConDesc = precio * 0.75;
 					}
 					else
 					{
 						precioConDesc = precio * 0.80;
 					}
 				}else if (cantidadLamparitas == 3)
 						{
 							if(marcaLamparitas == "ArgentinaLuz")
 							{
 								precioConDesc = precio * 0.85;
 							}else if(marcaLamparitas == "FelipeLamparas")
 								{
 									precioConDesc = precio * 0.90;
 								}
 								else
 								{
 									precioConDesc = precio * 0.95;
 								}
 						}
 	if(precioConDesc > 120)	
 	{
 		impuesto = precioConDesc * 10 / 100;
 		precioConDesc = precioConDesc + impuesto;
 		alert ("IIBB Usted pago " + precioConDesc + " , siendo "+impuesto+" el impuesto que se pagó.");
 	}
 	precioDescuento.value = precioConDesc;
}
