'use strict';

/* Filters */

angular.module('RPSLS.filters', []).
  filter('parseResults', function() {
    return function(input) {
      switch(parseInt(input))
        {
        case 0:
          input = "Rock";
          break;
        case 1:
          input = "Paper";
          break;
        case 2:
          input = "Scissors";
          break;
        case 3:
          input = "Spock";
          break;
        case 4:
          input = "Lizard";
          break;
        }
        return input;
    };
  });
