/**
 * Created by Hector on 23/11/2015.
 */
function validacion() {
    valor = document.getElementById("nombre").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("El nombre introducido no es válido, introducelo de nuevo y vuelve a intentarlo");
        return false;
    }

    valor = document.getElementById("apellido").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("Los apellidos introducidos no son válidos, introducelos de nuevo y vuelve a intentarlo");
        return false;
    }
}
