/**
* NoteWrangler Module
*
* NavBar Directive
*/
angular.module('NoteWrangler')
.directive('nwPageNav', function(){
	return {
		replace: true,
		restrict: 'E',			 
		templateUrl: 'assets/templates/directives/nwPageNav.html',
		controller: function ($scope, $location){
			$scope.isPage = function(name){
				//using regex to identify the page where we are to enable the nav
				//    /\/notes($|\/)/
				var bInPage = new RegExp(name).test($location.path());
				console.log("location.path():",$location.path());
				console.log("name",name);
				return bInPage;
			};
		}
	};
});