angular.module('rtfmApp').service('userService', function($firebaseAuth, $state) {

	var authRef = new Firebase("https://dl-firstapp.firebaseio.com/s");
	var auth = $firebaseAuth(authRef);

	this.getUser = function () {
		return auth.$getAuth();
	};

	this.register = function (newUser) {
		return auth.$createUser(newUser);
	};

	this.login = function (user) {
		return auth.$authWithPassword(user);
	};

	this.logout = function (user) {
		return auth.$unauth();
	}

	this.getAuth = function () {
		return auth.$getAuth();
	}

	auth.$onAuth(function(authData) {
		if (!authData) {
			$state.go('login');
		}
	});

});