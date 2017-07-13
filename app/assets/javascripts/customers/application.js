
app.controller("CustomerSearchController", [
    "$scope","$http",'$location',
    function($scope , $http, $location, $routeParams) {
      $scope.search = function(searchTerm) {
      $scope.searchedFor= searchTerm;
      $http.get("/customers/", { "params": { "format": "json", "keywords": searchTerm } }).then(function(response) 
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
      $scope.editCustomer = function(customer) {
        $location.path("/customers/" + customer.id + '/edit');
      }
      
    }
    ]
)


app.controller("CustomerDetailController", [
      "$scope","$http","$routeParams",
      function($scope , $http , $routeParams) {
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

        var customerId = $routeParams.id;
            $scope.customer = {};
        $http.get("/customers/" + customerId + ".json").then(function(response) {
            $scope.customer = response.data;
            },
            function(response) {
              alert("There was a problem: " + response.status);
            }
        );
        $http.get("/customers/" + customerId + "/edit.json" ).then(function(response) {
            $scope.customer = response.data;
            },
            function(response) {
              alert("There was a problem: " + response.status);
            }
        );
      }
]);
