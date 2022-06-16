<?php
$connie=mysqli_connect('localhost','root','','exercise');
if ($connie->connect_error) {
    die("Connection failed: " . $connie->connect_error);
  }
$type=$_POST['type'];
$weight=$_POST['weight'];
$date=$_POST['date'];

$sql="INSERT INTO weight_lift(type,weight,date) VALUES('$type','$weight','$date')";

$rs=mysqli_query($connie,$sql);

if($rs)
{
	echo "successfully inserted";	
}
$sql1="SELECT *FROM weight_lift";
 
 $rs=mysqli_query($connie,$sql1);
 echo "<br><b>Type</b>&nbsp;&nbsp;&nbsp;"."<b>Weight</b>&nbsp;&nbsp;&nbsp;"."<b>Date</b><br><br>";
 while($row=mysqli_fetch_assoc($rs))
	 
 {
	 echo $row['type']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row['weight']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row['date']."<br>";
 }

$connie->close();
?>