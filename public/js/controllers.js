'use strict';

/* Controllers */

var controllers = angular.module('RPSLS.controllers', []);

var GameCtrl = controllers.
  controller('GameCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.playerChoice = "";
    $scope.computerChoice = "";
    $scope.playerScore = 0;
    $scope.computerScore = 0;
    $scope.ties = 0;
    $scope.result = "";

    var gameChoices = [0,1,2,3,4];

    $scope.playGame = function() {
        $scope.computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        var results = (5 + $scope.playerChoice - $scope.computerChoice) % 5;
        if (results == 1 || results == 3) {
            $scope.playerScore++;
            $scope.result = "Winner!";
        }
        else if (results == 2 || results == 4) {
            $scope.computerScore++;
            $scope.result = "Sorry, you didn't win.";
        }
        else {
            $scope.ties++;
            $scope.result = "It's a tie!";
        }

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: GameModalCtrl,
          resolve: {
            items: function () {
              return {
                'playerChoice': $scope.playerChoice,
                'computerChoice': $scope.computerChoice,
                'result': $scope.result
                };
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.playerChoice = "";
            $scope.computerChoice = "";
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

  }]);

var GameModalCtrl = function ($scope, $modalInstance, items) {

    $scope.playerChoice = items.playerChoice;
    $scope.computerChoice = items.computerChoice;
    $scope.result = items.result;

    $scope.resetGame = function() {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
