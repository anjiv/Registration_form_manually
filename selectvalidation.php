<?php

$state = $_POST['select'];
$rajasthan = array("Jaipur", "Jodhpur", "Udaipur", "Kota");
$maharashtra = array("Pune", "Mumbai", "Nagpur", "Nashik");
$gujrat = array("Ahmedabad", "Surat", "Vadodara", "Rajkot");
$tamilnadu = array("Chennai", "Salem", "Vellore", "Erode");
echo '<div class="lab-content">
        <label>Select city :</label>
      </div>';
switch ($state) {
    case "Rajasthan":
        echo "<select class='drop' id='dropdown'>";
        echo " <option disabled selected>Please pick one</option>";
        foreach($rajasthan as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Maharashtra":
        echo "<select class='drop' id='dropdown'>";
        echo " <option disabled selected>Please pick one</option>";
        foreach($maharashtra as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Gujrat":
        echo "<select class='drop' id='dropdown'>";
        echo " <option disabled selected>Please pick one</option>";
        foreach($gujrat as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Tamil nadu":
        echo "<select class='drop' id='dropdown'>";
        echo " <option disabled selected>Please pick one</option>";
        foreach($tamilnadu as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
}
