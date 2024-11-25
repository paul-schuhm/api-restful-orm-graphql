# DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**concertsIdGet**](ConcertsApi.md#concertsIdGet) | **GET** /concerts/{id} | Obtenir le détail d&#x27;un concert
[**getAllConcerts**](ConcertsApi.md#getAllConcerts) | **GET** /concerts | Obtenir la liste des concerts à venir

<a name="concertsIdGet"></a>
# **concertsIdGet**
> ConcertDetail concertsIdGet(id)

Obtenir le détail d&#x27;un concert

### Example
```javascript
import {DmoDesignFirstDuServiceWebDeBilletterieDeConcerts} from 'dmo_design_first_du_service_web_de_billetterie_de_concerts';

let apiInstance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi();
let id = 56; // Number | 

apiInstance.concertsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ConcertDetail**](ConcertDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="getAllConcerts"></a>
# **getAllConcerts**
> Concerts getAllConcerts()

Obtenir la liste des concerts à venir

### Example
```javascript
import {DmoDesignFirstDuServiceWebDeBilletterieDeConcerts} from 'dmo_design_first_du_service_web_de_billetterie_de_concerts';

let apiInstance = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi();
apiInstance.getAllConcerts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Concerts**](Concerts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

