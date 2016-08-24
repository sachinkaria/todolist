app.controller('mainController', ['$scope',function($scope){
  $scope.test = 'Hello world!';
  $scope.todoList = [];
  $scope.currentData = Date.now();
  $scope.editable = false;

  $scope.addTodo = function(todo){
    $scope.todoList.push({description: $scope.descriptionText, created: Date.now()});
    $scope.descriptionText = '';
  };

  $scope.removeTodo = function(todo){
    var index = $scope.todoList.indexOf(todo)
    if(index > -1){
      $scope.todoList.splice(index,1);
    };
  };

  $scope.editTodo = function(todo){
    $scope.editable = true;
    $scope.existingTodo = todo;
  };

  $scope.saveTodo = function(){
    $scope.existingTodo = {};
    $scope.editable = false;
  }
}]);
