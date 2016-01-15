// var app = angular.module('blocitoff', ['ui-router', 'firebase']);

(function() {
  function config($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      });
  }

  angular
    .module('blocitoff', ['ui.router', 'firebase'])
    .config(config);
})();
