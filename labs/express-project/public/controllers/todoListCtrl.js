<!doctype html>
<html ng-app="myapp">
<head>
<title>Todo</title>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
</head>
<body>
	<a href="#/todos">Todo List</a><a href="#/todoForm">Todo Form</a>
	<div ng-view>
	</div>
</body>
<script>
	var appModule = angular.module("myapp",['ngRoute', 'tagger']);
	appModule.config(['$routeProvider',
		function($routeProvider) {
		$routeProvider.
			when('/todos', {
				templateUrl: 'partials/todo-list.html',
				controller: 'appListCtrl'
			}).
			when('/todoForm', {
				templateUrl: 'partials/todo-form.html',
				controller: 'appFormCtrl'
			}).
      otherwise({
        redirectTo: '/todos'
      });
  }]);
	appModule.factory('todoService',[function() {
		console.log("Service factory init");
		var todos = [];
		function addTodoImpl(newTodo) {
			todos.push(newTodo);
		}
		function getTodoImpl() {
			return todos;
		}
		return {
			addTodo : addTodoImpl,
			getTodos : getTodoImpl
		};
	}]);
	appModule.controller("appFormCtrl", ['$scope', 'tag', 'todoService', function($scope, tag,todoService) {
		$scope.todo = {};
		$scope.addTodo = function() {
			var todoObject = $scope.todo;
			todoObject.tags = tag.tagTodo(todoObject);
			todoService.addTodo(todoObject);
		};
	}]);
	appModule.controller("appListCtrl", ['$scope', 'tag', 'todoService', function($scope, tag,todoService) {
		$scope.todos = todoService.getTodos();
	}]);
	appModule.directive("todoDirective", function() {
		return {
			templateUrl : "templates/todo-template.html"
		};
	});
	appModule.filter("bold", function() {
		return (function(input, param) {
			if ((param) && (param.description)) {
			return input.toUpperCase() + param.description.toLowerCase();
			} else {
				return input.toUpperCase();
			}
		});
	});
</script>
<script type="text/javascript">
angular.module('tagger', [])
.factory('tag', [function() {
	var tagTodo = function(todoObject) {
		return todoObject.description.split(" ");
	};
  return {
    tagTodo: tagTodo
  };
}]);
</script>

</html>