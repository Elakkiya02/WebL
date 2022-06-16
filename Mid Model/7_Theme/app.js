myApp = angular.module('myApp',[])

myApp.controller('mainController',['$scope', function($scope){
	$scope.inputMode = 1;  // light mode by default
}])

myApp.directive('theme', function(){
	return {
    //only matches element name in this case theme.
  	restrict: 'E',
    //pass in templates to a directive
    transclude: true,
    // create an isolated scope for the directive
    scope: {
    	// the '@' ensures that for the statement "<theme mode='{{inputMode}}'>",
      // the value of inputMode is assigned to mode
    	mode: '@'
    },
    
    // note the use of ng-style
    // the variable 'myStyle' is defined below (in the controller)
    template: "<div ng-style='myStyle'> <div ng-transclude></div> </div>",
    controller: function($scope) {
    	$scope.myStyle = {}  // default br
      
      // styling for dark mode
      var style_dark = {'background-color': 'black','color': 'white'}
      var changeMode = function(){
      	if ($scope.mode == 0) {
        	$scope.myStyle = style_dark;
        }
        else {
        	$scope.myStyle = {};
        }
      }
      
      // $watch is an in-built function
      // here, it monitors the scope variable 'mode' for a change in value
      // if there is a change, it executes the function 'changeMode'
      $scope.$watch("mode", changeMode)
    }
  }
})