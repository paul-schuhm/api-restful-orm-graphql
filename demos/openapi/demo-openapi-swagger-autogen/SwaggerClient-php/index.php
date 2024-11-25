<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\AdministrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
    );
$pseudo = "pseudo_example"; // string | 
$password = "password_example"; // string | 

try {
  $apiInstance->loginPost($pseudo, $password);
} catch (Exception $e) {
  echo 'Exception when calling AdministrationApi->loginPost: ', $e->getMessage(), PHP_EOL;
}


//$apiInstance = new \Swagger\Client\Api\ConcertsApi(new GuzzleHttp\Client());
//
//try{
//  $concerts =  $apiInstance->getAllConcerts();
//  var_dump($concerts);
//}catch(Exception $e){
//  echo 'Exception when calling ConcertsApi->getAllConcerts: ', $e->getMessage(), PHP_EOL;
//}
