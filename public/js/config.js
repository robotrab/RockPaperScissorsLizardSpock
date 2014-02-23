'use strict';

//Setting up route
angular.module('RPSLS').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/game', {
        templateUrl: 'partials/game.html',
        controller: 'GameCtrl'
      }).
      otherwise({
        redirectTo: '/game'
      });
}]);

//Setting HTML5 Location Mode
// angular.module('RPSLS').config(['$locationProvider',
//   function($locationProvider) {
//     $locationProvider.hashPrefix('!');
// }
// ]);
