app.controller('LandingCtrl', function($scope, $firebaseObject) {
  var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/");

  $scope.data = $firebaseObject(ref);

});
