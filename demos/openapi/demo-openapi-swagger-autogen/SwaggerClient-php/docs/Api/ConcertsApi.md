# Swagger\Client\ConcertsApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**concertsIdGet**](ConcertsApi.md#concertsidget) | **GET** /concerts/{id} | Obtenir le détail d&#x27;un concert
[**getAllConcerts**](ConcertsApi.md#getallconcerts) | **GET** /concerts | Obtenir la liste des concerts à venir

# **concertsIdGet**
> \Swagger\Client\Model\ConcertDetail concertsIdGet($id)

Obtenir le détail d'un concert

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ConcertsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int | 

try {
    $result = $apiInstance->concertsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConcertsApi->concertsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  |

### Return type

[**\Swagger\Client\Model\ConcertDetail**](../Model/ConcertDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAllConcerts**
> \Swagger\Client\Model\Concerts getAllConcerts()

Obtenir la liste des concerts à venir

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ConcertsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getAllConcerts();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConcertsApi->getAllConcerts: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\Concerts**](../Model/Concerts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

