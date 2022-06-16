var app=angular.module('App',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/login',{
        templateURL:'./pages/login.html',
        controller:"loginCntrl"
    })
    .when('/home',{
        templateURL:'./pages/home.html',
        controller:'homeCntrl'
    })
    .otherwise({redirectTo:'/login'})
}]);

app.controller('loginCntrl',function($scope){
    $scope.message="Login Page";
});
app.controller('homeCntrl',function($scope){
    $scope.message="Home Page";
});