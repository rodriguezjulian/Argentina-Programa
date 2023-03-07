let mensaje;
mensaje=prompt("Ingresar mensaje");


function mostrarMensaje(mensaje)
{
    console.log(typeof(mensaje));
}

mostrarMensaje(mensaje);

//EJERCICIO DOS
/*
let numeroUno;
let numeroDos;
let resta;

numeroUno=parseInt(prompt("Ingrese numero",numeroUno));
numeroDos=parseInt(prompt("Ingrese numero",numeroDos));

function restar (numeroUno , numeroDos)
{
    return numeroUno - numeroDos;
}
console.log( restar (numeroUno , numeroDos));
*/
//EJERCICIO TRES
/*
let numeroA;
let numeroB;

numeroA=parseInt(prompt("Ingrese numero A",numeroA));
numeroB=parseInt(prompt("Ingrese numero B",numeroB));

console.log("Numero A",numeroA);
console.log("Numero B",numeroB);

function intercambio(numeroA, numeroB )
{
    let auxiliar;
    auxiliar= numeroA;
    numeroA=numeroB;
    numeroB=auxiliar;
    console.log("Numero A",numeroA);
    console.log("Numero B",numeroB);
}
intercambio(numeroA, numeroB );
*/

//EJERCICIO CUATRO
/*
let ladroCuadrado;
let superficie;
ladroCuadrado=Number(prompt("Ingrese lado de cuadrado",ladroCuadrado));

function calcularPerimetro(ladroCuadrado)
{
    let perimetro;
    perimetro=ladroCuadrado*ladroCuadrado;
    return perimetro;
}

function calcularSuperficieCuadrada(ladroCuadrado)
{
    let superficie;
    superficie= ladroCuadrado*4;
    return superficie;
}
perimetro = calcularPerimetro(ladroCuadrado);
superficie=calcularSuperficieCuadrada(ladroCuadrado);

console.log("Lado ingresado",ladroCuadrado);
console.log("Perimetro del cuadrado",perimetro);
console.log("Superficie del cuadrado",superficie);
*/
//EJERCICIO 5
/*
let gradosFahrenheit;
let gradosCelcius;

gradosFahrenheit=Number(prompt("Ingrese temperatura en fahrenheit",gradosFahrenheit));

function convertirACelcius(gradosFahrenheit)
{
    let resultado;
    resultado=(gradosFahrenheit - 32) * 5/9; 
    return resultado;
}
gradosCelcius=convertirACelcius(gradosFahrenheit);

console.log("Temperatura en farenheit",gradosFahrenheit);
console.log("Temperatura en Celsius",gradosCelcius);
*/

//EJERCICIO 6
/*
let numero;
let factorial;
let maximo=10;

function ingresarNumMax(maximo)
{
    let numero;
    let bandera=0;
    while(bandera===0)
    {
        numero=Number(prompt("Ingresar numero menor a ",maximo,numero));
        if(numero<=maximo)
        {
            bandera=1;
        }
        else
        {
            alert("ERROR, Recuerde que el maximo es "+ maximo);
        }
    }  
    return numero;  
}

numero=ingresarNumMax(maximo);

function calcularFactorial(numero)
{
    let auxiliar=numero;
    let resultado;
    let bandera=0;

    while(auxiliar>1)
    {
      auxiliar= auxiliar - 1;
      if(bandera==0)
      {
        resultado=numero*auxiliar;
        bandera=1;
      }
      else
      {
        resultado=resultado*auxiliar;
      }  

    }
    return resultado;
}

console.log(factorial=calcularFactorial(numero));
*/
//EJERCICIO 7
/*
let textoIngresado;
textoIngresado=prompt("Ingrese texto");



function palindromo (textoIngresado)
{
    let cadenaOriginal = textoIngresado.toLowerCase();
    let bandera=0;
    let letras="";
    let letrasUno;
    let letrasReversa;

    letrasEspacios = cadenaOriginal.split(""); 

    for( i=0;i<textoIngresado.length;i++)
    {
        if(letrasEspacios[i] != " ")
        {
            letras=letras+ letrasEspacios[i];
        }      
    }

    letrasUno = letras.split(""); 
    letrasReversa=letras.split("").reverse();

  for( i=0;i<letras.length;i++)
  {
    if(letrasUno[i]!=letrasReversa[i])
     {
         bandera=1;
     } 
  }
if(bandera==0)
{
    alert("El texto ingresado: " + textoIngresado + " es un palindromo.");
}
else
{
    alert("El texto ingresado: " + textoIngresado + " NO es un palindromo.");
}
}
palindromo (textoIngresado);
*/
//EJERCICIO 8
/*
let textoIngresado;
textoIngresado=prompt("Ingrese texto",textoIngresado);

function mostrarMin(textoIngresado)
{
    alert("Texto en minuscula: " + textoIngresado.toLowerCase());
}
function mostrarMayusc(textoIngresado)
{
    alert("Texto en mayuscula: " + textoIngresado.toUpperCase());
}
mostrarMin(textoIngresado);
mostrarMayusc(textoIngresado);
*/

//EJERCICIO 9

/*let nota = Number(prompt('ingrese la calificacion del alumno'));

if (nota < 3) {


    console.log('Muy deficiente');

} else { 
    if (nota >= 3 && nota <=4) {


        console.log('Insuficiente');

} else {
    if (nota === 5 || nota ===6) {

            console.log('Suficiente');



    } else {
    if (nota === 7) {

        console.log('Bien');

    } else {
        if (nota === 8) {

            console.log('Notable');


        } else {
            if (nota >= 9 && nota <=10) {


                console.log('Sobresaliente');
            } else{

                alert("ingrese un dato valido");
            }

        }

    }

    }

}

};*/

//EJERCICIO 10
/*
let mes;
mes= prompt("Ingrese mes para saber cuanto dias tiene.",mes );

function calcularDiasMes(mes)
{
    mesIngresado=mes.toLowerCase();
    if(mesIngresado=== "febrero")
    {
        alert("El mes tiene 28 dias");
    }
    else
    {
        if(mesIngresado==="abril" || mesIngresado==="junio" || mesIngresado==="septiembre" || mesIngresado==="noviembre")
        {
            alert("El mes tiene 30 dias")
        }
        else
        {
            if(mesIngresado==="enero" || mesIngresado==="marzo" || mesIngresado==="mayo" || mesIngresado==="julio" || 
            mesIngresado==="agosto" || mesIngresado==="octubre" || mesIngresado==="diciembre")
            {
                alert("El mes tiene 31 dias");
            }
            else
            {
                alert("ERROR, Ingrese mes valido");
            }        
        }
    }
}
calcularDiasMes(mes);*/

//EJERCICIO 11
/*
let numero;
let maximo=10;
let contador=0;
let arrayNumero=[];
let arrayStr;
function ingresarNumMax(maximo)
{
    let numero;
    let bandera=0;
    while(bandera===0)
    {
        numero=Number(prompt("Ingresar numero menor a ",maximo,numero));
        if(numero<=maximo)
        {
            bandera=1;
        }
        else
        {
            alert("ERROR, Recuerde que el maximo es "+ maximo);
        }
    }  
    return numero;  
}

numero=ingresarNumMax(maximo);


function crearArray(numero)
{
    let arrayAuxliar=[];
    let i;

    for(i=0;i<=numero;i++)
    {
        arrayAuxliar[i]=i;   
    }
    return arrayAuxliar;
}
arrayNumero= crearArray(numero)

for(i=1; i<=numero; i++)
{  
    for(j=1; j<=i; j++)
    {        
       document.write(arrayNumero[j]);       
    }
    document.write("<br>");
    arrayNumero[i+1];
}
*/

//EJERCICIO 12
/*
let bultosStock;
let cantidadBultosPorCaja;
let cantidadCajasLlenas;
let bultosQueSobran;

function ingresarNumMensaje(mensajeUno,mensajeDos)
{
    let auxiliar=0;
    do
    {
        auxiliar= prompt(mensajeUno,mensajeDos);
        if(auxiliar>0)
        {
            return auxiliar;
        }
        else
        {
            alert("ERROR, Ingrese numero mayor a 0");
        }
    }while(auxiliar<0); 
}
bultosStock=ingresarNumMensaje("Ingrese cantidad de bultos en stock","Numero de bultos en stock");
cantidadBultosPorCaja=ingresarNumMensaje("Ingrese cantidad de bultos que se pueden colocar por caja","Cantidad de bultos a colocar por caja");

//bultosStock=prompt("Ingrese cantidad de bultos en stock", "Numero de bultos en stock");
//cantidadBultosPorCaja=prompt("Ingrese cantidad de bultos que se pueden colocar por caja","Cantidad de bultos a colocar por caja");
function calcularCajas(bultosStock,cantidadBultosPorCaja)
{
   return bultosStock/cantidadBultosPorCaja;
    
}
function bultosSobrantes(bultosStock,cantidadBultosPorCaja)
{
   return bultosStock%cantidadBultosPorCaja;
    
}
cantidadCajasLlenas=bultosStock/cantidadBultosPorCaja;
bultosQueSobran=bultosStock%cantidadBultosPorCaja;
console.log("CAJAS COMPLETAS: ",parseInt(cantidadCajasLlenas));
console.log("BULTOS SOBRANTES: ",bultosQueSobran);
*/

//EJERCICIO 13
/*
let codigoIngresado;
let descuentoFiesta=5;
let descuentoFocus=10;
let bandera=0;

do
{
    codigoIngresado= prompt("Ingrese codigo Fiesta o Focus.","Fiesta o Focus");
    codigoIngresado=codigoIngresado.toLowerCase();

    if(codigoIngresado==="fiesta")
    {
        alert("El descuento es de "+ descuentoFiesta + "%");
        bandera=1;
    }
    else
    {
        if(codigoIngresado==="focus")
        {
            alert("El descuento es de "+ descuentoFocus + "%");
            bandera=1;
        }
        else
        {
            alert("ERROR, Ingrese codigo valido");
            
        }
    }
}while(bandera==0);
*/

