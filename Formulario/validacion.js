function validacion() {

    $(document).ready(function(){
    $("#formulario").submit(validacion());
    
    

    valor = $("#nombre").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        $("#nombre").addClass("form-group has-success");
    }else{
        $("#nombre").removeClass("form-group has-success control-label form-control help-block").addClass("form-group has-error");
        alert("El nombre introducido no es válido, introducelo de nuevo y vuelve a intentarlo");
        return false;
    }
        
    

    valor = $("#apellido").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("Los apellidos introducidos no son válidos, introducelos de nuevo y vuelve a intentarlo");
        return false;
    }

    valor = $("#telefono").val();
    if( isNaN(valor) || valor == null || valor.length == 0 || valor.length < 9 ) {
        alert("El telefono introducido no es valido");
        return false;
    }


    valor = $("#correo").val();
    if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
            alert("El correo electrónico introducido no es correcto");
            return false;
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
})   
    
}