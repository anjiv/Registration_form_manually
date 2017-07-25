<?php
$email = $_POST['email'];
$mail = array("anjali@gmail.com", "rahul@gmail.com", "anjali.vijay@qed42.com", "anvi@yahoo.com");
if(in_array($email,$mail)){
  echo "true";
}
