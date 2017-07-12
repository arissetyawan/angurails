//= require angular
//= require_tree .
//... we'll be putting more stuff here later
//... and now we're putting stuff here

var app = angular.module('myApp', ['ngRoute', 'templates'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/customers", {
        controller: "CustomerSearchController",
        templateUrl: "customer_search.html"
      })
    .when("/customers/:id",{
        controller: "CustomerSearchController",
        templateUrl: "customer_detail.html"
    });
  }
);

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
  


app.controller("CustomerSearchController", [
    "$scope","$http",'$location',
    function($scope , $http, $location, $routeParams) {
      $scope.search = function(searchTerm) {
      $scope.searchedFor= searchTerm;
      $http.get("/customers", { "params": { "format": "json", "keywords": searchTerm } }).then(function(response) 
          {
            $scope.customers = response.data;
          },
          function(response) 
          {
            alert("There was a problem: " + response.status);
          }
        );
      }
      
      $scope.viewDetails = function(customer) {
        $location.path("/customers/" + customer.id);
        $http.get("/customers/"+ customer.id, { "params": {"format" : "json"}}).then(function(response) 
        {
          $scope.customer = response.data;
        },
        function(response) 
        {
          alert("There was a problem: " + response.status);
        }
      );
      }
      
    }
    ]
)

