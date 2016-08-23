app.controller('mainController', ['$scope',function($scope){
  $scope.test = 'Hello world!';
  $scope.todoList = [{description: "First To Do", created: "23/08/2016"}];
  $scope.currentData = Date.now();

  $scope.addTodo = function(todo){
    $scope.todoList.push({description: $scope.descriptionText, created: Date.now()});
  }

  $scope.removeTodo = function(todo){
    var index = $scope.todoList.indexOf(todo)
    if(index > -1){
      $scope.todoList.splice(index,1);
    };
  };
}]);
