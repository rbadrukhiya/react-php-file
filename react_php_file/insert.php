<?php 

     $conn = mysqli_connect('localhost' , 'root' , '' , 'react-file');
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');


// $data = json_decode(file_get_contents('php://input'), true);

   

    
    $image = $_FILES['image']['name'];
    $name = $_POST['name'];
    $email = $_POST['email']; 
    echo $image;
    echo $name;
    echo $email;
         
         $insert = "insert into file(image , name , email) values ('$image' , '$name' , '$email')";
         mysqli_query($conn , $insert);



// echo $data ;

 ?>