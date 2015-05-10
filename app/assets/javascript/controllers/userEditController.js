/**
* UserWrangler Module
*
* UserEditController
*/
angular.module('NoteWrangler')
.controller('UsersEditController', function(User, $scope, $routeParams, $location){
	$scope.user = User.get({id: $routeParams.id});
	console.log("$scope.user: ",$scope.user);
	$scope.isSubmitting = false;

	$scope.saveUser = function(user){
		$scope.isSubmitting = true;
		//http service class success or error when the request is finished
		//that is why we need a promise here 
		user.$update()
		.then()
		.catch(function(error){
			console.log("Update user in server errors: ",error);
		})
		.finally(function(){
			$scope.isSubmitting = false;
			$location.path("/users/"+user.id);
		});
	};
});