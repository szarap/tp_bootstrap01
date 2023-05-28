const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('email');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const btn_resumen = document.getElementById('btn-resumen');
const btn_borrar = document.getElementById('btn-borrar');
const precioTicket = 200
const estudiante = 0.8
const trainee = 0.5
const junior = 0.15

btn_resumen.addEventListener('click', totalDescuento);
btn_borrar.addEventListener('click', resetForm);

function totalDescuento(){
    //if (!nombre.value || !apellido.value || !cantidad.value || !ElementInternals.value){
   if (nombre.value ==="" || apellido.value ==="" || cantidad.value === "" || ElementInternals.value === "" ){
      alert('Debe completar todos los campos');
      return
   }
 
   if (categoria.value === 'estudiante') {
      total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(estudiante))*cantidad.value;
   } else if (categoria.value === 'trainee') {
      total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(trainee))*cantidad.value;
   } else if (categoria.value === 'junior') {
      total.innerText = (parseFloat(precioTicket)- parseFloat(precioTicket) * parseFloat(junior))*cantidad.value;
   }
}

function resetForm() {
   nombre.value = "";
   apellido.value = "";
   correo.value ="";
   cantidad.value ="";
   total.innerText = "";
}

 