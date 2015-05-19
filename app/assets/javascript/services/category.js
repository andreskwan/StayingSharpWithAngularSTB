/**
* NoteWrangler Module
*
* Factory to access REST users in server
*/
angular.module('NoteWrangler')
.factory('Category', ['$resource', function($resource){
	return $resource('/categories/:id', {id:"@id"}, {
		update : {
			method : "PUT"
		}
	});
}]);