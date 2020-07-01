 var app= angular
    .module("myApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {  
        $locationProvider service
        $locationProvider.hashPrefix(''); 
        $routeProvider
            .when("/home", {
                templateUrl: "template/home.html"
            })
            .when("/about", {
                templateUrl: "template/about.html"
            })
            .when("/contact", {
                templateUrl: "template/contact.html"
            })
    });