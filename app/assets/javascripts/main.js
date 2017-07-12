var app = angular.module('myApp', ['ngRoute', 'templates'])
app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    })
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
  

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

