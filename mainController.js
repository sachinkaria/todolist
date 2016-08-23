app.controller('mainController', ['$scope',function($scope){
  $scope.test = 'Hello world!';
  $scope.todoList = [{description: "First To Do", created: "23/08/2016"}];
}]);
