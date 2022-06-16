<?php
$avengers[]= array("hulk","cap","blackwidow","hawkeye","thor");
$q = $_POST["q"];
$hint = "";
if(in_array($q,$avengers)){
    $hint="Name already found";
}
else{
    $hint="Name not found";
}
echo $hint;
?>