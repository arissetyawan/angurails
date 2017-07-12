

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
        //$location.path("/customers/" + customer.id);

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
