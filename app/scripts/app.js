(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('list', {
        url: '/',
        controller: 'ListCtrl as list',
        templateUrl: '/templates/list.html'
      });
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase'])
    .config(config);
})();
