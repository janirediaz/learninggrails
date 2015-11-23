<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Formulario de resgistro</title>
</head>
<body>
<h3>Formulario de registro</h3>
<form>
    Nombre:<br> <input type="text" name="nombre"><br>
    Apellidos:<br> <input type="text" name="apellido"><br>
    Número de Teléfono:<br><input type="tel" name="telefono"><br>
    Correo electrónico:<br><input type="text" name="correo"><br>
    Dirección:<br> <input type="text" name="dirección"><br>
    Ciudad:<br><input type ="text" name="ciudad"><br>
    Código postal:<br><input type ="text" name="código"><br>
    Provincia:<br>
    <select name="Provincia">
        <option value="">- Selecciona una provincia -</option>
        <option value="alava">Alava</option>
        <option value="guipuzkoa">Gipuzkoa</option>
        <option value="bizkaia">Bizkaia</option>
        <option value="asturias">Asturias</option>
        <option value="murcia">Murcia</option>
        <option value="avila">Avila</option>
        <option value="burgos">Burgos</option>
    </select><br>
    Estado civil:<br>
    <select name="Estado civil">
        <option value="">-Selecciona un estado -</option>
        <option value="soltero">Soltero</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="otro">Otro</option>
    </select><br>
    Sexo:<br>
    Hombre <input type="radio" name="sexo" value="H">
    Mujer  <input type="radio" name="sexo" value="M">
    <br>
    ¿Edad?:<br>
    <input type="radio" name="edad" value="menor">menor de 18
    <input type="radio" name="edad" value="adulto">entre 19 y 60
    <input type="radio" name="edad" value="mayor">mayor de 61
    <br>
    ¿Hobbies?:<br>
    <input type="checkbox" name="hobbies" value="cine">Cine
    <input type="checkbox" name="hobbies" value="libros">Libros
    <input type="checkbox" name="hobbies" value="musica">Música
    <input type="checkbox" name="hobbies" value="viajes">Viajes
    <input type="checkbox" name="hobbies" value="otros">Otros
    <br>
    <h3>Datos de usuario</h3>
    Nombre: <br><input type="text" name="nombre"><br>
    Contraseña:<br> <input type="password" name="pass"><br>
    <input type="submit" value="Enviar">
    <input type="reset" value="Borrar">
</form>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
        type="text/javascript"></script>
</body>
</html>