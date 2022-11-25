<?php
    $dbHost = 'Juliana';
    $dbUsername = 'root';
    $dbPassword = 'juju070318fla';
    $dbName = 'cadastro-tcc'

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conexao -> connect_errno){
        echo "Erro";
    }
    else {
        echo "Conexão efetuada com sucesso";
    }
?>