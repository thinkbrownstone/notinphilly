(function () {
  angular.module('notinphillyServerApp').controller('LoginController', ['$scope', '$http', function($scope, $http) {

     $scope.Login =  function(req, res)  {
         console.log("User is to be authenticated.....");
         $http.post('/auth/local', {
             username: $scope.user.username,
             password: $scope.user.password
         }).
             success(function (data) {
                 console.log("User successfully authenticated");
                 currentUser = User.get();
             }).
             error(function (err) {
                 console.log("User authentication failed");
                 this.logout();
             })
     };

  }]);
})();
