'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('RPSLS', ['RPSLS.filters']);


function gameCtrl($scope) {
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
    };

    $scope.resetGame = function() {
        //$scope.playerChoice = "";
        //$scope.computerChoice = "";
        $('a.close-reveal-modal').trigger('click');
    };
}

