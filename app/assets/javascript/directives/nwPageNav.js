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
			//what is name?? who delivers this value?
			$scope.isPage = function(name){
				//using regex to identify the page where we are to enable the nav
				//find $ or / at the end
				// debugger;
				// console.log("location.path(): ",$location.path());
				//    /\/notes($|\/)/
				// this expression returns a boolean
				var pageName = new RegExp(name).test($location.path());
				console.log("location.path():",$location.path());
				console.log("name",name);
				return pageName;
				// return false;
			};
		}
	};
});