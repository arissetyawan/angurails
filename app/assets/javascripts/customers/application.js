
app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
      .when("/", {
        controller: "CustomerSearchController",
        templateUrl: "customer_search.html"
      })
      .when("/customers/:id",{
        controller: "CustomerDetailController",
        templateUrl: "customer_detail.html"
      });
    }]);

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
      }
      
    }
    ]
)


app.controller("CustomerDetailController", [
      "$scope","$http","$routeParams",
      function($scope , $http , $routeParams) {

        var customerId = $routeParams.id;
        $scope.customer = {};
        $http.get(
        "/customers/" + customerId + ".json"
        ).then(function(response) {
        $scope.customer = response.data;
        },function(response) {
          alert("There was a problem: " + response.status);
        }
      );
      }
]);
