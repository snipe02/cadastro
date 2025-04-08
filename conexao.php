<?php
    $servidor="localhost:3306";
    $usuario="root";
    $senha="Lu@cas12";
    $dbnome="cabi";  

    $conexao=mysqli_connect( $servidor,$usuario,$senha, $dbnome );
    
    if(!$conexao){
        die("Houve um erro: ".mysqli_connect_errno());
    }

?>
