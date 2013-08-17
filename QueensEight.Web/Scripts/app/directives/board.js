queensEight.directive("board", function () {
  return {
    restrict: "C",
    template: queensEight.boardTemplate
  };
});

queensEight.directive("interactive", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      scope.isInteractive = true;
    }
  };
});

queensEight.directive("cell", function () {
  return {
    restrict: "C",
    controller: function($scope) {
      $scope.isDark = function (row, column){
        var rowOffset = row % 2;
        var cellIndex = (row * 8 + column + rowOffset) % 2;
        var isDark = cellIndex == 1;
        return isDark;
      };
    },
    link: function (scope, element, attrs) {
      var row = scope.$parent.$index;
      var column = scope.$index;

      element.bind("click", function () {
        scope.toggleQueen(row, column);
      });
    },
    template: '<div ng-class="{dark: isDark($parent.$index, $index)}" class="cell">'
  };
});

