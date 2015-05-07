/**
* NoteWrangler Module
*
* noteEditController
*/
angular.module('NoteWrangler')
.controller('NotesEditController', function(Note, $scope, $routeParams){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmittting = false;

	$scope.saveNote = function(note){
		$scope.isSubmittting = true;
		note.$update().finally(function(){
			$scope.isSubmittting = false;
		});
	};
});