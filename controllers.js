
//CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location', 'cityService', function ($scope,$location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', () => {
        cityService.city = $scope.city;
    });

    $scope.submit = function(){
        $location.path('/forecast');
    }



}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {
    $scope.city = cityService.city;

    $scope.weatherResultsArray = [  { date: new Date(), temp: '202.02' },
                                    { date: new Date().getTime()+(5 * 24 * 60 * 60 * 1000), temp: '300.02' },
                                    { date: new Date().getTime()+(10 * 24 * 60 * 60 * 1000), temp: '600.02' },
                                    { date: new Date().getTime()+(12 * 24 * 60 * 60 * 1000), temp: '800.02' } ];

    $scope.convertToCelsius = (k) => {
        var c = 0;
        c = k - 273.15;
        return c.toFixed(2);
    }

    $scope.formatDate = (dt) => {
        return new Date(dt);
    }

}]);
