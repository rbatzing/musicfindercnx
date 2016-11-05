(function() {
  "use strict";

  angular.module("MusicFinder", [])
    .controller("MoodController", function($scope) {
      $scope.moods = [ "Happy", "Sad", "Angry" ];

      $scope.getSongs = function() {
        alert("I'm searching!");
      };
    });

}());