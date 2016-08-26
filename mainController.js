app.controller('mainController', ['$scope',function($scope){
  $scope.test = 'Hello world!';
  $scope.todoList = [];
  $scope.editable = false;
  $scope.showList = false;


  $scope.addTodo = function(todo){
    if(!$scope.descriptionText || $scope.descriptionText === '') { return; }
    $scope.todoList.push({description: $scope.descriptionText, created: Date.now()});
    $scope.descriptionText = '';
    $scope.showList = true;
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
