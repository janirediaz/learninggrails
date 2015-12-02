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


    valor = $("#correo").val();
    if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
        $("#divCorreo").removeClass().addClass("form-group has-error");
    }else{
        $("#divCorreo").removeClass().addClass("form-group has-success");
        valida = false;
    }

    valor = $("direccion").val();
    if($("#direccion").val().length < 1) {  
        $("#divDireccion").removeClass().addClass("form-group has-error"); 
    }else{
        $("#divDireccion").removeClass().addClass("form-group has-success");
        valida = false;
    }


    valor = $("#localidad").val();
    if($("#localidad").val().length < 1) {  
        $("#divLocalidad").removeClass().addClass("form-group has-error");
    }else{
        $("#divLocalidad").removeClass().addClass("form-group has-success");
        valida = false;
    }

    valor = $("#codigo").val();
    if($("#codigo").val().length < 5) {  
        $("#divCodigo").removeClass().addClass("form-group has-error");
    }else{
        $("#divCodigo").removeClass().addClass("form-group has-success");
        valida = false;
    }  


    indice = $("#provincia").selectedIndex;
    if($("#provincia option:selected").val() == "") {  
        $("#divProvincia").removeClass().addClass("form-group has-error");
    }else{
        $("#divProvincia").removeClass().addClass("form-group has-success");
        valida = false;
    }

    indice = $("#estado").selectedIndex;
    if($("#estado option:selected").val() == "") {  
        $("#divEstado").removeClass().addClass("form-group has-error");
    }else{
        $("#divEstado").removeClass().addClass("form-group has-success");
        valida = false;
    }

    indice = $("condicones").selectedIndex;
    if($("#condciones option:selected").val() == ""){
            alert("Debes aceptar las condiones");
            return false;
    }

    return valida;
   
    
}