/**
* NoteWrangler Module
*
* Factory to access REST users in server
*/
angular.module('NoteWrangler')
.factory('User', ['$resource', function($resource){
	return $resource('/users/:id', {id:"@id"}, {
		update : {
			method : "PUT"
		}
	});
}]);