function validacion() {
    

    valor = $("#nombre").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("El nombre introducido no es válido, introducelo de nuevo y vuelve a intentarlo");
        return false;
    }
    alert("hola");

    valor = $("#apellido").val();
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("Los apellidos introducidos no son válidos, introducelos de nuevo y vuelve a intentarlo");
        return false;
    }

    valor = $("#telefono").value;
    if( isNaN(valor) || valor == null || valor.length == 0 ) {
        alert("El telefono introducido no es valido");
        return false;
    }


    valor = $("#correo").value;
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(valor)){
        alert("La dirección de email es incorrecta");
        return false;
    }


    indice = $("#provincia").selectedIndex;
    if( indice == null || indice == 0 ) {
        return false;
    }
   
    

    
}