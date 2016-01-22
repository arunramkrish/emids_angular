appModule.controller('CommentController',function($scope) {
	$scope.comments = [];
	$scope.add = function(c) {
		$scope.comments.push(c);
	};
});