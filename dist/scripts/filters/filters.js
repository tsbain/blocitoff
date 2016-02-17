(function() {
  function completed() {
    return function(tasks) {
      var completedTasks = [];
      angular.forEach(tasks, function(task, index) {
        if (task.completed === true) completedTasks.push(task);
      })
      return completedTasks;
    }
  }

  angular
    .module('blocitoff')
    .filter('completed', completed);
})();

(function() {
  function notCompleted() {
    return function(tasks) {
      var completedTasks = [];
      angular.forEach(tasks, function(task, index) {
        if (task.completed === false) completedTasks.push(task);
      })
      return completedTasks;
    }
  }

  angular
    .module('blocitoff')
    .filter('notCompleted', notCompleted);
})();
