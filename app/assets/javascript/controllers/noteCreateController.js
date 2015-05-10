/**
* NoteWrangler Module
*
* noteIndexController
*/
angular.module('NoteWrangler')
.controller('NotesCreateController', function(Note,$scope,$location){
	//new resource 
	$scope.note = new Note();
	$scope.isSubmitting = false;

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(note){
			// console.log("------this is the note returned from server: ",note);
			$location.path("/notes/"+note.id);
		}).finally(function(){
			$scope.isSubmitting = false;
		});
	};
});