(function() {
  function ListCtrl($firebaseArray) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/tasks");

    this.tasks = $firebaseArray(ref);
  }

  angular
    .module('blocitoff')
    .controller('ListCtrl', ListCtrl);
})();


// <p>{{ list.tasks }}</p>
