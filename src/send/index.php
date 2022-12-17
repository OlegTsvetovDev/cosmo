<pre>
	<?php var_dump($_POST); ?>
	<?php var_dump($_REQUEST); ?>
</pre>

<?php

	function StripData( $string, $length) {
		$strReturn = substr(htmlspecialchars(trim($string)), 0, $length);
		return $strReturn;
	}

  $c = "\r\n";
  $name = StripData($_REQUEST['name'], 100);
  $phone = StripData($_REQUEST['phone'], 20);
  $email = StripData($_REQUEST['email'], 100);
	// $country = StripData($_REQUEST['country'], 100);
	// $location = StripData($_REQUEST['location'], 100);
	$site = StripData($_REQUEST['site'], 100);
	$term = StripData($_REQUEST['utm_term'], 100);
	$campaign = StripData($_REQUEST['utm_campaign'], 100);
	$placement = StripData($_REQUEST['utm_placement'], 100);

	$subject = "Заявка с promo";
	$message_server = "Имя: ".$name.$c."Телефон: ".$phone.$c."email: ".$email.$c."Страна: ".$country.$c."Город: ".$location.$c."Сайт: ".$site.$c."Ключевая фраза: ".$term.$c."Кампания: ".$campaign.$c."Адрес площадки: ".$placement;
	// $message_client = "Имя: ".$name.$c."Телефон: ".$phone.$c."email: ".$email.$c."Сайт: ".$site;

	// send data via email
  $to_server = 'brainstormmedia@ya.ru';
  $to_client = 'info@cosmo-group-russia.ru';
	$from = 'noreply@cosmo-group-russia.ru';
	$headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
  $headers .= "From:".$from."\r\n";
	mail($to_server, $subject, $message_server, $headers);
  mail($to_client, $subject, $message_server, $headers);

?>
