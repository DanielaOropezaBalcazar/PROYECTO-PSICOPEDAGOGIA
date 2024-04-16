<?php
	function Conectarse()
	{//inttroducimos los datos de  host que son "Server", "usuario" y "contraseña" 
		if (!($link=mysqli_connect("localhost","root","")))//aca hay que introducir los datos que especifique arriba!!!
		{
			return 0;
		}
		if (!mysqli_select_db($link, "mypicture_bd"))
		{
			return 0;
		}
		return $link;
	}

	//--------------------------

	function alta ($costoEnvio, $fecha, $Dron_idDron)
	{
		$conexion = Conectarse();

			if (!$conexion)
			{
				echo "<h1>No se puede dar de alta. Error al conectar.</h1>";
				exit();
			}

		// NO poner comillas simples en nombre de tabla, ni de campos, sólo en valores alfanuméricos.
        

		$consulta = "INSERT INTO Pedido (`costoEnvio`, `fecha`, `Dron_idDron`) VALUES ('$costoEnvio', '$fecha', '$Dron_idDron');";


		$resultado=mysqli_query($conexion,$consulta);

			//cerramos la conexión con el motor de BD
			mysqli_close($conexion);
	}

	//--------------------------

	function baja ($id)
	{
		$conexion = Conectarse();

			if (!$conexion)
			{
				echo "<h1>No se puede dar de baja. Error al conectar.</h1>";
				exit();
			}

		// NO poner comillas simples en nombre de tabla, ni de campos, sólo en valores alfanuméricos.
		$consulta = "DELETE FROM Pedido WHERE idPedido = $id";

		echo $consulta . "<BR>";

		$resultado=mysqli_query($conexion,$consulta);

		//echo "Resultado de la operaci&oacute;n: " . $resultado;

			//cerramos la conexión con el motor de BD
			mysqli_close($conexion);

	}

	//--------------------------

	function modificacion ($id, $costoEnvio, $fecha, $Dron_idDron)
	{
		$conexion = Conectarse();

			if (!$conexion)
			{
				echo "<h1>No se puede dar de alta. Error al conectar.</h1>";
				exit();
			}

		// NO poner comillas simples en nombre de tabla, ni de campos, sólo en valores alfanuméricos.

		/*
		UPDATE `agenda` SET `nombre` = 'pepe3',
						`tel` = '467641_1',
						`direccion` = 'ch 149_1',
						`mail` = 'pepe@host2.com.ar' WHERE `agenda`.`id` =2
		*/

		$consulta = "UPDATE Pedido SET costoEnvio = '$costoEnvio', fecha = '$fecha', Dron_idDron = '$Dron_idDron' WHERE idPedido = $id";


		echo $consulta;

		$resultado=mysqli_query($conexion, $consulta);

			//cerramos la conexión con el motor de BD
			mysqli_close($conexion);
	}





	// ABM de Pedidos
	function altaPedido ($nombre, $telefono, $servicio, $comentario, $precio)
	{
		$conexion = Conectarse();

			if (!$conexion)
			{
				echo "<h1>No se puede dar de alta. Error al conectar.</h1>";
				exit();
			}

		// NO poner comillas simples en nombre de tabla, ni de campos, sólo en valores alfanuméricos.
        

		$consulta = "INSERT INTO pedidos (`Nombre`, `Telefono`, `Servicio`, `Comentarios`, `precio_del_servicio`) VALUES ('$nombre', '$telefono', '$servicio', '$comentario', $precio);";


		$resultado=mysqli_query($conexion,$consulta);

			//cerramos la conexión con el motor de BD
			mysqli_close($conexion);
	}

	function agregarFoto($nombre, $descripcion, $precio, $urlImagen) {
		$conexion = Conectarse();
		if (!$conexion) {
			return "Error al conectar con la base de datos.";
		}
	
		$consulta = "INSERT INTO fotos (nombre, descripcion, precio, columna_imagen) VALUES (?, ?, ?, ?);";
		
		// Preparar la sentencia
		if ($stmt = mysqli_prepare($conexion, $consulta)) {
			// Vincular los parámetros para los marcadores
			mysqli_stmt_bind_param($stmt, "ssds", $nombre, $descripcion, $precio, $urlImagen);
			
			// Ejecutar la consulta
			$resultado = mysqli_stmt_execute($stmt);
			
			// Cerrar la sentencia
			mysqli_stmt_close($stmt);
			
			mysqli_close($conexion);
			
			return $resultado ? "Foto agregada con éxito." : "Error al agregar la foto.";
		} else {
			mysqli_close($conexion);
			return "Error al preparar la consulta.";
		}
	}

	function obtenerFotos() {
		$conexion = Conectarse();
		if (!$conexion) {
			return "Error al conectar con la base de datos.";
		}
		$consulta = "SELECT id, nombre FROM fotos;";
		$resultado = mysqli_query($conexion, $consulta);
		$fotos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
		mysqli_close($conexion);
		return $fotos;
	}
	
	function obtenerDetallesFoto($id) {
		$conexion = Conectarse();
		if (!$conexion) {
			return "Error al conectar con la base de datos.";
		}
		$consulta = "SELECT * FROM fotos WHERE id = ?;";
		if ($stmt = mysqli_prepare($conexion, $consulta)) {
			mysqli_stmt_bind_param($stmt, "i", $id);
			mysqli_stmt_execute($stmt);
			$resultado = mysqli_stmt_get_result($stmt);
			$foto = mysqli_fetch_assoc($resultado);
			mysqli_stmt_close($stmt);
			mysqli_close($conexion);
			return $foto;
		} else {
			mysqli_close($conexion);
			return "Error al preparar la consulta.";
		}
	}

	function actualizarFoto($id, $nombre, $descripcion, $precio, $urlImagen) {
		$conexion = Conectarse();
		if (!$conexion) {
			return "Error al conectar con la base de datos.";
		}
	
		$consulta = "UPDATE fotos SET nombre = ?, descripcion = ?, precio = ?, columna_imagen = ? WHERE id = ?;";
		
		if ($stmt = mysqli_prepare($conexion, $consulta)) {
			mysqli_stmt_bind_param($stmt, "ssdsi", $nombre, $descripcion, $precio, $urlImagen, $id);
			$resultado = mysqli_stmt_execute($stmt);
			mysqli_stmt_close($stmt);
			mysqli_close($conexion);
			return $resultado ? "Foto actualizada con éxito." : "Error al actualizar la foto.";
		} else {
			mysqli_close($conexion);
			return "Error al preparar la consulta.";
		}
	}
	
	function eliminarFoto($id) {
		$conexion = Conectarse();
		if (!$conexion) {
			return false;
		}
	
		$consulta = "DELETE FROM fotos WHERE id = ?;";
		
		if ($stmt = mysqli_prepare($conexion, $consulta)) {
			mysqli_stmt_bind_param($stmt, "i", $id);
			$resultado = mysqli_stmt_execute($stmt);
			mysqli_stmt_close($stmt);
			mysqli_close($conexion);
			return $resultado;
		} else {
			mysqli_close($conexion);
			return false;
		}
	}

	function obtenerTodasLasFotos() {
		$conexion = Conectarse();
		if (!$conexion) {
			return [];
		}
		
		$consulta = "SELECT * FROM fotos;";
		$resultado = mysqli_query($conexion, $consulta);
		
		if($resultado) {
			$fotos = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
		} else {
			$fotos = [];
		}
		
		mysqli_close($conexion);
		return $fotos;
	}
	
	
	
	


?>