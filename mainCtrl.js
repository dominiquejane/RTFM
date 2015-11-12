angular.module('rtfmApp').controller('mainCtrl', function($scope, threadsRef, $firebaseArray, threadService) {

	$scope.threads = $firebaseArray(threadsRef);

});