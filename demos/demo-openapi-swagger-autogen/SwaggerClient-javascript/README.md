# dmo_design_first_du_service_web_de_billetterie_de_concerts

DmoDesignFirstDuServiceWebDeBilletterieDeConcerts - JavaScript client for dmo_design_first_du_service_web_de_billetterie_de_concerts
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dmo_design_first_du_service_web_de_billetterie_de_concerts --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DmoDesignFirstDuServiceWebDeBilletterieDeConcerts = require('dmo_design_first_du_service_web_de_billetterie_de_concerts');

var api = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.AdministrationApi()
var opts = { 
  'pseudo': "pseudo_example", // {String} 
  'password': "password_example" // {String} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.loginPost(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:5001*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.AdministrationApi* | [**loginPost**](docs/AdministrationApi.md#loginPost) | **POST** /login | S&#x27;authentifier comme administrateur du service
*DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi* | [**concertsIdGet**](docs/ConcertsApi.md#concertsIdGet) | **GET** /concerts/{id} | Obtenir le détail d&#x27;un concert
*DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertsApi* | [**getAllConcerts**](docs/ConcertsApi.md#getAllConcerts) | **GET** /concerts | Obtenir la liste des concerts à venir
*DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.DefaultApi* | [**rootGet**](docs/DefaultApi.md#rootGet) | **GET** / | Obtenir les informations sur le service de billeterie

## Documentation for Models

 - [DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.ConcertDetail](docs/ConcertDetail.md)
 - [DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.Concerts](docs/Concerts.md)
 - [DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.HalLinkObject](docs/HalLinkObject.md)
 - [DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.LoginBody](docs/LoginBody.md)

## Documentation for Authorization


### jwt

