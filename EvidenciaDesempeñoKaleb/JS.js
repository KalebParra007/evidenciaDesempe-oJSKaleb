//Variables generales
let tiempo = Number(prompt('Ingrese los minutos que realizó el ejercicio'));
let intensidad = prompt('Seleccione la intensidad: \nBaja\nMedia\nAlta')

//Variables de calorías
let caloriaCorrerBaja = 10;
let caloriaCorrerMedia = 13;
let caloriaCorrerAlta = 16;
let caloriaNadarBaja = 8;
let caloriaNadarMedia = 11;
let caloriaNadarAlta = 14;
let caloriaBiciBaja = 6;
let caloriaBiciMedia = 9;
let caloriaBiciAlta = 12;

let caloriasQuemadas = 0;

//Funciones
function calcularCalCorrer() {
    if (intensidad === 'baja') {
        caloriasQuemadas = caloriaCorrerBaja * tiempo;
    } else if (intensidad === 'media') {
        caloriasQuemadas = caloriaCorrerMedia * tiempo;
    } else if (intensidad === 'alta') {
        caloriasQuemadas = caloriaCorrerAlta * tiempo;
    } else {
        console.log('Ingrese una opción válida de intensidad');
        caloriasQuemadas = 0; // Retorna 0 si se ingresa una intensidad no válida
    }
    return caloriasQuemadas;
}

function calcularCalNadar() {
    if (intensidad === 'baja') {
        caloriasQuemadas = caloriaNadarBaja * tiempo;
    } else if (intensidad === 'media') {
        caloriasQuemadas = caloriaNadarMedia * tiempo;
    } else if (intensidad === 'alta') {
        caloriasQuemadas = caloriaNadarAlta * tiempo;
    } else {
        console.log('Ingrese una opción válida de intensidad');
        caloriasQuemadas = 0;
    }
    return caloriasQuemadas;
}

function calcularCalBicicleta() {
    if (intensidad === 'baja') {
        caloriasQuemadas = caloriaBiciBaja * tiempo;
    } else if (intensidad === 'media') {
        caloriasQuemadas = caloriaBiciMedia * tiempo;
    } else if (intensidad === 'alta') {
        caloriasQuemadas = caloriaBiciAlta * tiempo;
    } else {
        console.log('Ingrese una opción válida de intensidad');
        caloriasQuemadas = 0;
    }
    return caloriasQuemadas;
}

//Ejecución
let opcion = true;

while (opcion) {
    let menuEjercicio = Number(prompt('Seleccione: \n1 - Correr\n2 - Nadar\n3 - Bicicleta\n4 - Salir'));

    switch (menuEjercicio) {
        case 1:
            calcularCalCorrer();
            console.log('Usted ha quemado ' + caloriasQuemadas + ' calorías corriendo');
            break;
        case 2:
            calcularCalNadar();
            console.log('Usted ha quemado ' + caloriasQuemadas + ' calorías nadando');
            break;
        case 3:
            calcularCalBicicleta();
            console.log('Usted ha quemado ' + caloriasQuemadas + ' calorías en bicicleta');
            break;
        case 4:
            opcion = false; // Sale del ciclo
            console.log('Gracias por utilizar la calculadora de calorías.');
            break;
        default:
            console.log('Ingrese una opción válida');
            break;
    }
}
