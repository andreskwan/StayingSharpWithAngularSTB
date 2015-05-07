/**
* NoteWrangler Module
*
* Factory to access REST notes in server
*/
angular.module('NoteWrangler')
.factory('Note', ['$resource', function($resource){
	return $resource('/notes/:id');
}]);