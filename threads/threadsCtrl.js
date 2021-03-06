angular.module('rtfmApp').controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, userService, $state) {

	if (!userService.getAuth()) {
		$state.go('login');
	}
	
	$scope.logout = function() {
		userService.logout();
	}

	$scope.threads = $firebaseArray(threadsRef);

	$scope.threads.$loaded().then(function() {
		console.log($scope.threads);
	});

	$scope.createThread = function (username, title) {
		$scope.threads.$add({username: username, title: title})
	};

});