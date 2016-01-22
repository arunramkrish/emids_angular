describe("Comments Test", function() {
	var scope = {};
	beforeEach(function(){
		module('comments');
		
		inject(function($controller){
			$controller('CommentController',{$scope:scope});
		});
		scope.add("new comment");
	});
	
	it ('testInit', function() {
		expect(scope.comments[0]).toBe('new comment');
	});
});

