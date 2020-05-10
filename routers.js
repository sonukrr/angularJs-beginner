
//ROUTES
weatherApp.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

});