<?php

$state = $_POST['select'];
$rajasthan = array("Jaipur", "Jodhpur", "Udaipur", "Kota");
$maharashtra = array("Pune", "Mumbai", "Nagpur", "Nashik");
$gujrat = array("Ahmedabad", "Surat", "Vadodara", "Rajkot");
$tamilnadu = array("Chennai", "Salem", "Vellore", "Erode");
echo '<div class="label-content">
        <label>Select city :</label>
      </div>';
switch ($state) {
    case "Rajasthan":
        echo "<select class='drop'>";
        foreach($rajasthan as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Maharashtra":
        echo "<select class='drop'>";
        foreach($maharashtra as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Gujrat":
        echo "<select class='drop'>";
        foreach($gujrat as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
    case "Tamil nadu":
        echo "<select class='drop'>";
        foreach($tamilnadu as $value){
          echo "<option>". $value . "</option>";
        }
        echo "</select>";
        break;
}