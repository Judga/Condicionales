function solicitarEdad() {
    let edad = prompt("Por favor ingrese su edad: ")


    console.log(edad)
    edad = number(edad)

    if (edad >= 18) {
        console.log("Eres mayor de edad")
    }

    else if (edad < 18) {

        console.log("Eres menor de edad")
    }

    else {
        console.log("Numero in valido")
    }


}


function verificarNumero() {

    let number = prompt("Por favor ingrese un numero")
    console.log(number)
    number = Number(number)


    if (number >= 0) {
        console.log("El numero es Positivo")
    }

    else if (number < 0) {
        console.log("El numero es Negativo")
    }

    else {
        console.log("El numero es invalido")
    }

}

function verificarNumeroPar() {

    let numbers = prompt("Por favor ingrese un numero")
    console.log(numbers)
    numbers = Number(numbers)


    if (number % 2 !== 0) {
        console.log("El numero es Par")
    }

    else if (number % 2 != 0) {
        console.log("El numero es Negativo")
    }

    else {
        console.log("El numero es invalido")
    }


}

function descuento() {

    let original = prompt("Por favor ingrese el precio original")
    console.log(original)
    original = Number(original)

    precioDescuento = original / 1.1

    if (descuento >= 100) {

        console.log("El precio con el 10% de descuento es: " + precioDescuento)
    }

    else if (descuento < 100) {
        console.log("No cumples las condiciones para recibir el descuento")
    }

    else {
        console.log("Valor invalido")
    }


}

function ComparacionNumeros() {

    let dato1 = prompt("Por favor ingrese un numero")
    console.log(dato1)
    let dato2 = prompt("Por favor ingrese otro numero")
    console.log(dato1)
    dato1 = Number(dato1)
    dato2 = Number(dato2)




    if (dato1 > dato2) {
        console.log("El primer valor es mayor")
    }

    else if (dato1 >= dato2) {
        console.log("ambos valores son iguales")

    }


    else if (dato1 < dato2) {
        console.log("el valor 2 es mayor")

    }
    else if (dato1 <= dato2) {
        console.log("ambos valores son iguales")

    }

    else {
        console.log("El numero es invalido")
    }

}

function edad() {

    let edad = prompt("Porfavor ingrese su edad")
    edad = Number(edad)


    if (edad < 12) {
        console.log("Eres un niño")
    }

    else if (13 <= edad <= 17) {
        console.log("Eres un adolecente")

    }


    else if (18 <= edad <= 64) {
        console.log("Eresim adulto")

    }
    else if (edad >= 65) {
        console.log("Eres un adulto mayor")

    }

    else {
        console.log("La edad es invalida")
    }

}

function notas() {

    let notas = prompt("Porfavor ingrese una nota entre 0 y 100")
    notas = Number(notas)


    if (notas >= 90) {
        console.log("Excelente")
    }

    else if (notas >= 70) {
        console.log("Bueno")

    }


    else if (notas >= 50) {
        console.log("Regular")

    }
    else if (notas < 50) {
        console.log("Insuficiente")

    }

    else {
        console.log("La nota es invalida")
    }

}

function menu() {
 let menu = prompt("Elija una opcion de menu: 1 para pizza, 2 para Hamburgesa, 3 para tacos")
    console.log(menu)

    switch (menu) {
        case 1:

        console.log ("Pizza de 3 quesos")

            break;

        case 2:

        console.log( "Hambuguesa de tocino")

            break;


        case 3:

        console.log("Tacos al pastor")

            break;

        default:
            break;
    }
}