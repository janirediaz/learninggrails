$(document).ready(function(){
    $("#formulario").submit(function(){
        return validacion();
    });
});  

function validacion() {

    var valida = true;

    valor = $("#nombre").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        $("#divNombre").removeClass().addClass("form-group has-error");
    }else{
        $("#divNombre").removeClass().addClass("form-group has-success");
        valida = false;
    }
        
    valor = $("#apellido").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        $("#divApellido").removeClass().addClass("form-group has-error");
    }else{
        $("#divApellido").removeClass().addClass("form-group has-success");
        valida = false;
    }

    valor = $("#telefono").val();
    if( isNaN(valor) || valor == null || valor.length == 0 || valor.length < 9 ) {
        $("#divTelefono").removeClass().addClass("form-group has-error");
    }else{
        $("#divTelefono").removeClass().addClass("form-group has-success");
        valida = false;

    }

    if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
        $("#divCorreo").removeClass().addClass("form-group has-error");
    }else{
        $("#divCorreo").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#direccion").val().length < 1) {  
        $("#divDireccion").removeClass().addClass("form-group has-error"); 
    }else{
        $("#divDireccion").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#localidad").val().length < 1) {  
        $("#divLocalidad").removeClass().addClass("form-group has-error");
    }else{
        $("#divLocalidad").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#codigo").val().length < 5) {  
        $("#divCodigo").removeClass().addClass("form-group has-error");
    }else{
        $("#divCodigo").removeClass().addClass("form-group has-success");
        valida = false;
    }  


    if($("#provincia").val() == "") {  
        $("#divProvincia").removeClass().addClass("form-group has-error");
    }else{
        $("#divProvincia").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#estado").val() == "") {  
        $("#divEstado").removeClass().addClass("form-group has-error");
    }else{
        $("#divEstado").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#sexo").val() == "") {  
        $("#divSexo").removeClass().addClass("form-group has-error");
    }else{
        $("#divSexo").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#edad").val() == "") {  
        $("#divEdad").removeClass().addClass("form-group has-error");
    }else{
        $("#divEdad").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#hobbies").val() == "") {  
        $("#divHobbies").removeClass().addClass("form-group has-error");
    }else{
        $("#divHobbies").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if($("#series").val() == "") {  
        $("#divSeries").removeClass().addClass("form-group has-error");
    }else{
        $("#divSeries").removeClass().addClass("form-group has-success");
        valida = false;
    }

    valor = $("#usuario").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        $("#divUser").removeClass().addClass("form-group has-error");
    }else{
        $("#divUser").removeClass().addClass("form-group has-success");
        valida = false;
    }

    valor = $("#pass").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        $("#divPass").removeClass().addClass("form-group has-error");
    }else{
        $("#divPass").removeClass().addClass("form-group has-success");
        valida = false;
    }

    if(!$("#condiciones").is(':checked')) {  
        alert("Por favor acepta las condicones");
    }else{
        alert("Has aceptado las condiciones");
    }

    return valida;
   
    
}