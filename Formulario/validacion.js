$(document).ready(function(){
    $("#formulario").submit(function(){
        return validacion();
    });
});  

function validacion() {

    boolean valida = true;

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
            alert("La direccion es obligatoria, por favor introducela e intentalo de nuevo");  
            return false; 
    }


    valor = $("#ciudad").val();
    if($("#ciudad").val().length < 1) {  
            alert("La localidad es obligatoria");  
            return false; 
    }

    valor = $("#codigo").val();
    if($("#codigo").val().length < 5) {  
            alert("El codigo postal debe tener 5 digitos");  
            return false;  
        }  


    indice = $("#provincia").selectedIndex;
    if($("#provincia option:selected").val() == "") {  
            alert("La provincia es obligatoria");  
            return false;
    }

    indice = $("#estado").selectedIndex;
    if($("#estado option:selected").val() == "") {  
            alert("Por favor selecciona un estado");  
            return false;
    }

    indice = $("condicones").selectedIndex;
    if($("#condciones option:selected").val() == ""){
            alert("Debes aceptar las condiones");
            return false;
    }

    return valida;
   
    
}