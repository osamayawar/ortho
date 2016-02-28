<?php 
$URL = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$loginURL = base_url() . "user/login";
if($URL == $loginURL) {
?>
	<?php echo $htmlContent; ?>
<?php 
} else { 
?>
	<?php echo $htmlContent; ?>
<?php 
}
?>