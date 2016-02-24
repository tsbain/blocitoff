(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/landing',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('list', {
        url: '/',
        controller: 'ListCtrl as list',
        templateUrl: '/templates/list.html'
      })
      .state('history', {
        url: '/history',
        controller: 'HistoryCtrl as history',
        templateUrl: '/templates/history.html'
      });
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase', 'ngAnimate'])
    .config(config);
})();

// Refactor Attempt 1
//
// var app = angular.module('blocitoff', ['ui.router', 'firebase']);
// function config($stateProvider, $locationProvider) {
//   $locationProvider
//     .html5Mode({
//       enabled: true,
//       requireBase: false
//     });
//
//   $stateProvider
//     .state('list', {
//       url: '/',
//       controller: 'ListCtrl as list',
//       templateUrl: '/templates/list.html'
//     });
// }
