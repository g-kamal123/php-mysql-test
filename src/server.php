<?php 
$servername = "mysql-server";
$username = "root";
$password = "secret";
$dbname = "mydb";

// Create connection
try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
if(isset($_POST['name1'])){
    echo 'set';
    $name = $_POST['name1'];
    $ct = $_POST['ct1'];
    $sct = $_POST['sct1'];
    $col = $_POST['col1'];
    $prc = $_POST['prc1'];
    $sql = "INSERT INTO products (prod_id,prod_name,prod_category,prod_sub_category,prod_color,prod_price) VALUES(DEFAULT,'$name','$ct','$sct','$col','$prc')";
    $conn->exec($sql);
    // echo $name;
}
}
catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

?>