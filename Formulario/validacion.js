function validacion() {
    valor = $("#nombre").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("El nombre introducido no es válido, introducelo de nuevo y vuelve a intentarlo");
        return false;
    }

    valor = document.getElementById("apellido").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("Los apellidos introducidos no son válidos, introducelos de nuevo y vuelve a intentarlo");
        return false;
    }

    valor = document.getElementById("telefono").value;
    if( isNaN(valor) ) {
        alert("El telefono introducido no es valido");
        return false;
    }


    valor = document.getElementById("correo").value;
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(valor)){
        alert("La dirección de email es incorrecta");
        return false;
    }

    alert("hola");

    indice = document.getElementById("provincia").selectedIndex;
    if( indice == null || indice == 0 ) {
        return false;
    }
   
    

    
}