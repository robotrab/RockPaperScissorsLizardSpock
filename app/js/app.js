'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('RPSLS', []);


function gameCtrl($scope) {
    $scope.playerChoice = "";
    $scope.computerChoice = "Lizard";
    $scope.playerScore = 0;
    $scope.computerScore = 0;

    $scope.playGame = function() {
        console.log($scope.playerChoice + $scope.computerChoice);
        $scope.playerScore++;
    };

    $scope.resetGame = function() {
        $scope.playerChoice = "";
        $('a.close-reveal-modal').trigger('click');
    };
}

