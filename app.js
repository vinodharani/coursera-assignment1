(function() {
'use strict';

  angular.module('LunchCheck', [])
          .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMessage = "";
    $scope.lunchList = "";
    $scope.lunchMessageColor = "";
    $scope.borderColor = "";

    $scope.checkLunch = function() {
      var lunchList = $scope.lunchList;
      var arrayOfLunchItems = lunchList.split(',');

      arrayOfLunchItems = trimLunchArray(arrayOfLunchItems);
      $scope.lunchMessage = generateMessage(arrayOfLunchItems);
    };

    function trimLunchArray(arrayOfLunchItems) {
      var i;
      var newArrayOfLunchItems = new Array();

      for (i = 0; i < arrayOfLunchItems.length; i++) {
        arrayOfLunchItems[i] = arrayOfLunchItems[i].trim();

        if(arrayOfLunchItems[i]) {
          newArrayOfLunchItems.push(arrayOfLunchItems[i]);
        }
      }
      return newArrayOfLunchItems;
    }

    function generateMessage(arrayOfLunchItems) {
      if(arrayOfLunchItems.length === 0) {
        $scope.lunchMessageColor = "red";
        $scope.borderColor = "red";
        return "Please enter data first";
      } else if(arrayOfLunchItems.length > 3) {
        $scope.borderColor = "green";
        $scope.lunchMessageColor = "green";
        return "Too much!";
      } else if(arrayOfLunchItems.length <= 3) {
        $scope.borderColor = "green";
        $scope.lunchMessageColor = "green";
        return "Enjoy!";
      }
    }

  }
})();
