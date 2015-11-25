angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    $scope.remaining = function() {
      var count = 0;
      $scope.todos.forEach(function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      oldTodos.forEach(function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  });
  
   $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };