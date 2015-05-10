/**
* NoteWrangler Module
*
* userCreateController
*/
angular.module('NoteWrangler')
.controller('UsersCreateController', function(User,$scope,$location){
	//new resource
	$scope.user = new User();
	$scope.isSubmitting = false;

	$scope.saveUser = function(user){
		$scope.isSubmitting = true;
		user
		.$save()
		.then(function(user){
			$location.path("/users/"+user.id);
			// console.log("User returned by server:",user);
		}).catch(function(errors){
			//validations
			console.log("Erros: ", errors);
		}).finally(function(){
			$scope.isSubmitting = false;
		});
	};
});