# Swagger\Client\AdministrationApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](AdministrationApi.md#loginpost) | **POST** /login | S&#x27;authentifier comme administrateur du service

# **loginPost**
> loginPost($pseudo, $password)

S'authentifier comme administrateur du service

Seuls les administrateurs peuvent s'authentifier pour l'instant

### Example
```php
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
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **string**|  | [optional]
 **password** | **string**|  | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

