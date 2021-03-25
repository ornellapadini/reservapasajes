// EN EL JS:
// Pensar la lógica de compra del pasaje y las validaciones correspondientes.

let origenElemento= document.getElementById('select-origen');
let origen;

function getOrigen(e){
    origen = e.target.value;
    console.log(origen);
}
origenElemento.addEventListener('change', getOrigen);

let destinoElemento= document.getElementById('select-destino');
let destino;

function getDestino(e){
    destino = e.target.value;
    console.log(destino);
}
destinoElemento.addEventListener('change', getDestino);

let cantidadElemento= document.getElementById('select-cantidad');
let cantidad;

function getCantidad(e){
    cantidad = e.target.value;
    console.log(cantidad);
}
cantidadElemento.addEventListener('change', getCantidad);

let fechaElemento= document.getElementById('fecha-partida');
let fecha;

function getFecha(e){
    fecha = e.target.value;
    console.log(fecha);
}
fechaElemento.addEventListener('change', getFecha);

let horarioElemento= document.getElementById('horario-salida');
let horario;

function getHorario(e){
    horario = e.target.value;
    console.log(horario);
}
horarioElemento.addEventListener('change', getHorario);


let nombre = document.getElementById('nombre');
nombre.addEventListener('change', fnNombre)
let nuevoName;
function fnNombre(e){
    nuevoName = e.target.value;
    console.log(nuevoName);
}

let apellido = document.getElementById('apellido');
apellido.addEventListener('change', fnApellido);
let nuevoApellido;
function fnApellido(e){
    nuevoApellido = e.target.value;
    console.log(nuevoApellido);
}

let dni = document.getElementById('dni');
dni.addEventListener('change', fnDni);
let nuevoDni
function fnDni(e){
    nuevoDni = e.target.value;
    console.log(nuevoDni);
}

let pagoElemento= document.getElementById('medios-pago');
let pago;

function getPago(e){
    pago = e.target.value;
    console.log(pago);
}
pagoElemento.addEventListener('change', getPago);

let confirmarviaje = document.getElementById('confirmar');
confirmarviaje.addEventListener('click', fnMostrarDatos)
let p = document.getElementById('datos-pasajero');

function fnMostrarDatos(){
    p.innerHTML = ` Ciudad Origen: ${origen} <br>
                    Ciudad Destino: ${destino} <br>
                    Cantidad de Pasajes: ${cantidad}<br>
                    Fecha de Partida: ${fecha}<br>
                    Horario de salida: ${horario}<br><hr>
                    Nombre: ${nuevoName}<br>
                    Apellido: ${nuevoApellido}<br>
                    Nro Dni:${nuevoDni}<br>
                    Medios de pago: ${pago}<br>`



}



//console.log(nombre + apellido + dni);


