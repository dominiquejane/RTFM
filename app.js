var app = angular.module('rtfmApp', ['firebase', 'ui.router']);

app.constant("fb", {url: "https://dl-firstapp.firebaseio.com"});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/threads')

	$stateProvider
		.state('logout', {
			url: '/logout',
			controller: function(userService) {
				return userService.logout();
			},
		})
		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: 'login/login.html',
		})
		.state('signup', {
			url: '/signup',
			controller: 'signupCtrl',
			templateUrl: 'signup/signup.html',
		})
		.state('threads', {
			url:'/threads',
			templateUrl: 'threads/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function (threadService) {
					return threadService.getThreads();
				}
			}
		})
		.state('thread', {
			url: '/threads/:threadId',
			templateUrl: 'thread/thread.html',
			controller: 'threadCtrl',
			resolve: {
				threadRef: function (threadService, $stateParams) {
					return threadService.getThread($stateParams.threadId);
				},
				commentsRef: function (threadService, $stateParams) {
					return threadService.getComments($stateParams.threadId);
				}
			}
		})

});