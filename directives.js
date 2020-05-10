//DIRECTIVES
weatherApp.directive('forecastCard', function () {
    return {
        restrict: 'E',
        templateUrl: 'directive/forecastcard.htm',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            standardDate: "&",
            dateFormat: "@"
        }
    }
});
