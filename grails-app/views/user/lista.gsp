<%--
  Created by IntelliJ IDEA.
  User: Hector
  Date: 09/12/2015
  Time: 15:48
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Lista Usuarios</title>
</head>

<body>
<g:each in="${listaUsuarios}" var="usuario">
    <p>Usuario${usuario.nombre} ${usuario.apellido} ${usuario.edad}</p>
    <a href="http://localhost8080/user/delete?id=${usuario.id}">Borrar usuario</a>
</g:each>

<a href="http://localhost8080/user">Ir al index</a>


</body>
</html>