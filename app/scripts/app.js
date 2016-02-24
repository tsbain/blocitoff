(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl',
        templateUrl: '/templates/landing.html'
      })
      .state('list', {
        url: '/list',
        controller: 'ListCtrl',
        templateUrl: '/templates/list.html'
      })
      .state('history', {
        url: '/history',
        controller: 'HistoryCtrl',
        templateUrl: '/templates/history.html'
      });
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase', 'ngAnimate'])
    .config(config);
})();
