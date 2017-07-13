var app = angular.module('myApp', ['ngRoute', 'templates', 'ngResource'])

app.config([
    '$httpProvider',
    '$locationProvider',
  function ($httpProvider, $locationProvider) {
    // Send CSRF token with every http request
    $httpProvider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    

  }
  ]);
  

app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
      .when("/customers", {
        controller: "CustomerSearchController",
        templateUrl: "customer_search.html"
      })
      .when("/customers/:id",{
        controller: "CustomerDetailController",
        templateUrl: "customer_detail.html"
      })
      .when("/customers/:id/delete",{
        controller: "CustomerDetailController"
      })
      .when("/customers/:id/edit",{
        controller: "CustomerDetailController",
        templateUrl: "customer_edit.html"
      });
    }]);

