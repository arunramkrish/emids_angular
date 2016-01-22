var todoFormModule = angular.module("todoFormModule",  []);
	appModule.controller("appFormCtrl", ['$scope', 'tag', 'todoService', function($scope, tag,todoService) {
		$scope.todo = {};
		$scope.addTodo = function() {
			var todoObject = $scope.todo;
			todoObject.tags = tag.tagTodo(todoObject);
			todoService.addTodo(todoObject);
		};
	}]);
