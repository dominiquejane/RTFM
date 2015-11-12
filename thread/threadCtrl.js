angular.module('rtfmApp').controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject) {

	var thread = $firebaseObject(threadRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function (username, text) {
		$scope.comments.$add({username: username, text: text});
	};

});