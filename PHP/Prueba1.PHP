<?php
$data = json_decode(file_get_contents("php://input"));

$nombre = $data->nombre;
$correo = $data->correo;

// Conectarse a la base de datos y ejecutar la consulta de inserción
// ...

// Devolver una respuesta (por ejemplo, un mensaje de éxito o un ID)
echo json_encode(['message' => 'Datos insertados con éxito']);
?>
