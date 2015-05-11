/**
* NoteWrangler Module
*
* NavBar Directive
*/
angular.module('NoteWrangler')
.directive('nwPageNav', function(){
	return {
		restrict: 'E',
		templateUrl: 'assets/templates/directives/nwPageNav.html',
		replace: true,
		controller: function(){
			$scope.isPage = function($scope){
				
			}
		}
	};
});