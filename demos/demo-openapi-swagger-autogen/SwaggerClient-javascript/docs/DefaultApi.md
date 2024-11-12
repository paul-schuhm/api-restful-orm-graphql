# DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.DefaultApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Obtenir les informations sur le service de billeterie

<a name="rootGet"></a>
# **rootGet**
> rootGet()

Obtenir les informations sur le service de billeterie

### Example
```javascript
import {DmoDesignFirstDuServiceWebDeBilletterieDeConcerts} from 'dmo_design_first_du_service_web_de_billetterie_de_concerts';

let apiInstance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.DefaultApi();
apiInstance.rootGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

