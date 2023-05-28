
function getValue(id) {
    return document.getElementById(id).value;
}

function guardarDatosTicket() {
    const valueNombre = getValue('nombre');
    const valueApellido = getValue('apellido');
    const valueEmail = getValue('email');
    const valueCantidad = getValue('cantidad'); 
    const valueCategoria = getValue('categoria');
    const valueTicket = 200;

    const objTicket = {
       nombre: valueNombre,
       apellido: valueApellido,
       email: valueEmail,
       cantidad: valueCantidad,
       categoria: valueCategoria,
       valor: valueTicket,
    };

    console.log(parseFloat(valueTicket))
    console.log(objTicket)
    return objTicket;
}

function validarTicket() {
    guardarDatosTicket();
    
    if( !this.nombre  || !this.apellido  || !this.email  || !this.cantidad || !this.categoria ){
        return false;   
    }
    if( this.categoria !== 'Estudiante' || this.categoria !== 'Trainee' || this.categoria !== 'Junior' ){
        return false;
    }
    console.log('paso las validaciones')
    return objTicket.value;
}

function resultadoConDesc(){

    validarTicket();
    console.log(this)
    console.log(this.valor)
    console.log(this.valueTicket)
    console.log(this.objTicket.valueTicket)

    if(categoria === 'Estudiante'){
        this.valor = parseFloat(valueTicket) - (parseFloat(valueTicket) * 0.8) * this.valueCantidad;
    }
    if(this.categoria === 'Trainee'){
        this.valor = parseFloat(valueTicket) - (parseFloat(valueTicket) * 0.5) * this.valueCantidad;
    }
    if(this.categoria === 'Junior'){
        this.valor = parseFloat(valueTicket) - (parseFloat(valueTicket) * 0.15) * this.valueCantidad;
    }
    //console.log('el resultado del descuento es: ', objTicket)
   console.log(`el resultado con descuento para el: ${this.valueCategoria} es ${this.valueTicket} pesos`)
    
} 

function mostrarTicket (){
    //guardarDatosTicket()
   //validarTicket()
    resultadoConDesc();
    
}


const btnResumen = document.getElementById('btn-resumen');

 //btnResumen.addEventListener("click", guardarDatosTicket);
 btnResumen.addEventListener('click', mostrarTicket)
    //guardarDatosTicket();
    //resultadoConDesc();

    const divResumenContainer = document.createElement('span');
    //divResumenContainer.textContent = `Total a Pagar: ${objTicket.$valueCategoria.value}`

 
   /*  let divResumenContainer = document.getElementById('div-resumen-container');
    divResumenContainer = document.createElement('span');
    divResumenContainer.classList.remove('hide'); 
    divResumenContainer.classList.add('container-resultado') */



