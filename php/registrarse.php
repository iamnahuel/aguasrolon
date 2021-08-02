<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
    include "conectar.php";
    $mysqli = conectarDB();
    //sleep(1);	
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $mysqli->set_charset('utf8');
	    

  $name = $dataObject-> nombre;
  $apellido = $dataObject-> apellido;
	$usuario = $dataObject-> usuario;
	$clave = $dataObject-> clave;
  $celular = $dataObject-> celular;
  $email = $dataObject-> correo;
  $localidad = "Rolon"; //$dataObject -> localidad;
  $direccion = $dataObject-> direccion;
  $tusuario  = "Cliente";

  if ($nueva_consulta = $mysqli->prepare("SELECT 
    *
    FROM usuarios 
    WHERE usuario = ?")) {
        $nueva_consulta->bind_param('s', $usuario);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
          $datos = mysqli_fetch_assoc($resultado);
            $encriptado_db = $datos['clave'];
           if ($pas == $encriptado_db)
          {
                $_SESSION['usuario'] = $datos['usuario'];
                echo json_encode(array('conectado'=>true,'usuario'=>$datos['usuario'], 'nombre'=>$datos['nombre'],  'apellido'=>$datos['apellido'], 'id'=>$datos['id'], 'clave'=>$datos['clave'], 'celular'=>$datos['celular'], 'localidad'=>$datos['localidad'], 'direccion'=>$datos['direccion'], 'correo'=>$datos['correo'], 'tusuario'=>$datos['tusuario']  ) );
               
              } else {
                echo json_encode(array('conectado'=>false, 'error' => 'La clave es incorrecta, vuelva a intentarlo.'));
               }
        }else {
              echo json_encode(array('conectado'=>false, 'error' => 'El usuario no existe.'));
        }
        $nueva_consulta->close();
      }
      else{
        echo json_encode(array('conectado'=>false, 'error' => 'No se pudo conectar a BD'));
      }
 // }
$mysqli->close();




?>