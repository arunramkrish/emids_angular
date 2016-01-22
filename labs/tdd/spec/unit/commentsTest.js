describe("Comments Test", function() {
	var scope;
	beforeEach(function(){
		module('comments');
		
		inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			$controller('CommentController',{$scope:scope});
		});
		scope.add("new comment");
	});
	
	it ('testInit', function() {
		expect(scope.comments[0]).toBe('new comment');
	});
	
	it ('testWithTwo', function() {
		scope.add("2nd comment");
		expect(scope.comments[0]).toBe('2nd comment');
	});
});

