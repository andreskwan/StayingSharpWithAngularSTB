/**
* NoteWrangler Module
*
* noteEditController
*/
angular.module('NoteWrangler')
.controller('NotesEditController', function(Note, $scope, $routeParams, $location, Category){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	$scope.categories   = Category.query();

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		//http service class success or error when the request is finished
		//that is why we need a promise here 
		note.$update().finally(function(){
			$scope.isSubmitting = false;
			$location.path("/notes/"+note.id);

		});
	};
});