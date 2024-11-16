# DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.AdministrationApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](AdministrationApi.md#loginPost) | **POST** /login | S&#x27;authentifier comme administrateur du service

<a name="loginPost"></a>
# **loginPost**
> loginPost(opts)

S&#x27;authentifier comme administrateur du service

Seuls les administrateurs peuvent s&#x27;authentifier pour l&#x27;instant

### Example
```javascript
import {DmoDesignFirstDuServiceWebDeBilletterieDeConcerts} from 'dmo_design_first_du_service_web_de_billetterie_de_concerts';

let apiInstance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.AdministrationApi();
let opts = { 
  'pseudo': "pseudo_example", // String | 
  'password': "password_example" // String | 
};
apiInstance.loginPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

