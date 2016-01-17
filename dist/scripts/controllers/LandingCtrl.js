(function() {
  function LandingCtrl($firebaseObject) {
    var ref = new Firebase("https://brilliant-torch-3503.firebaseio.com/");

    this.data = $firebastObject(ref);
    this.heroTitle = "Is this thing on?";
  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', LandingCtrl);
})();


// <p>{{ landing.data }}</p>
