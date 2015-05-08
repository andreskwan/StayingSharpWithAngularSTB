/**
* NoteWrangler Module
*
* noteShowController
*/
angular.module('NoteWrangler')
.controller('NotesShowController', function(Note, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.deleteNote = function(note){
		note.$remove().then(function(){
			$location.path("/notes/");
		});
	};
});

// Directives

// Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.

// Markers on a **DOM element**

// What is a Service

// Define Service

// Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.