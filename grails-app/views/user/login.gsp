<%--
  Created by IntelliJ IDEA.
  User: Hector
  Date: 22/12/2015
  Time: 14:49
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Formulario de Login</title>
</head>

<body>
<h3>Formulario del login</h3>

<form action="http://localhost:8080/user/login" method="get">
    Usuario:<br><input type="text" name="user"></br>
    Password:<br><input type="text" name="password"></br>

    <input type="submit" value="Login">

</form>
<a href="http://localhost:8080/user/lista">Lista Usuarios</a>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>

</body>
</html>