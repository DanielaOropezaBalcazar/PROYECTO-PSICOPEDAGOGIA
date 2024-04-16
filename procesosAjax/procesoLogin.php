<?php
session_start();

if(isset($_POST['username']) && isset($_POST['password'])) {
    include("../sql.php");

    $conexion = Conectarse();
    if (!$conexion) {
        echo "<h1>Error al intentar conectar a BD</h1>";
        exit();
    }

    // Limpiar y escapar los datos del formulario para evitar inyección SQL
    $usuario = mysqli_real_escape_string($conexion, $_POST['username']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']);

    // Consulta SQL para verificar el usuario y la contraseña
    $sql = "SELECT * FROM usuarios WHERE nombre = '$usuario' AND password = '$password'";
    $result = mysqli_query($conexion, $sql);

    // Verificar si se encontró un usuario con la contraseña correspondiente
    if(mysqli_num_rows($result) == 1) {
        // Usuario y contraseña correctos, iniciar sesión
        session_destroy();
        session_start(); // Iniciar sesión
        $_SESSION['username'] = $_POST['username'];
        echo "success"; // Indicar que el inicio de sesión fue exitoso
    } else {
        // Usuario o contraseña incorrectos
        echo "Usuario o contraseña incorrectos"; // Esto se mostrará en el elemento con id "resultado"
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conexion);
}
?>