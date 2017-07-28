<?php
header('Content-Type: application/json');
function getAllWords() {
  $words = array("Science", "Commerce", "Arts", "Medical", "Designing");
  $result = array();
  if($_GET['q']) {
    $query = $_GET['q'];
    foreach($words as $word) {
      if( strpos( strtolower($word), strtolower($query)) > -1 ) {
        $result[] = $word;
      }
    }
  }
  echo json_encode($result);
}
getAllWords();
?>
