angular.module('rtfmApp').controller('signupCtrl', function($scope, userService, $state) {

	$scope.register = function () {
		userService.register($scope.newUser)
		.then(function () {
			return userService.login($scope.newUser);
		})
		.then(function() {
			$state.go('threads');
		})
		.catch(function (err) {
			$scope.error = "Registration invalid";
		})
	};

});