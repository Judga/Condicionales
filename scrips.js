function solicitarEdad () {
    let edad = prompt ("Por favor ingrese su edad: ")


    console.log (edad)
    edad = number(edad)

    if (edad >= 18 )
        {
            console.log ("Eres mayor de edad")
        }

        else if (edad < 18) {

            console.log ("Eres menor de edad")
        }

        else {
            console.log("Numero in valido")
        }


}


function verificarNumero ()
{

let number =prompt ("Por favor ingrese un numero") 
console.log (number)
number = Number (number)


if (number >=0)
    {
        console.log ("El numero es Positivo")
    }

    else if (number <0)
        {
            console.log ("El numero es Negativo")
        }

        else {
            console.log ("El numero es invalido")
        }

}

function verificarNumeroPar () {

    let numbers =prompt ("Por favor ingrese un numero") 
    console.log (numbers)
    numbers = Number (numbers)
    
    
    if (number % 2 !== 0)
        {
            console.log ("El numero es Par")
        }
    
        else if (number % 2 !=0)
            {
                console.log ("El numero es Negativo")
            }
    
            else {
                console.log ("El numero es invalido")
            }
    

}

function  descuento() {

    let original =prompt ("Por favor ingrese el precio original") 
    console.log (original)
    original = Number (original)

    precioDescuento = original / 1.1
    
    if (descuento >= 100)
        {
            
            console.log ("El precio con el 10% de descuento es: " + precioDescuento)
        }
    
        else if (descuento < 100 )
            {
                console.log ("No cumples las condiciones para recibir el descuento")
            }
    
            else {
                console.log ("Valor invalido")
            }
    

}

function ComparacionNumeros () {

    let dato1 =prompt ("Por favor ingrese un numero") 
    console.log (dato1)
    let dato2 =prompt ("Por favor ingrese otro numero") 
    console.log (dato1)
    dato1 = Number (dato1)
    dato2 = Number (dato2)

    
    
    
    if (dato1 > dato2)
        {
            console.log ("El primer valor es mayor")
        }
    
        else if (dato1 >= dato2)
            {
                console.log ("ambos valores son iguales")
                
            }
        

            else if (dato1 < dato2){
                console.log ("el valor 2 es mayor")

            }
            else if (dato1 <= dato2)
            {
                console.log ("ambos valores son iguales")
                
            }
    
            else {
                console.log ("El numero es invalido")
            }
    
}