angular.module('voicy', ['ui.router', 'ngResource'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "templates/home.tmpl.html",
    controller: "HomeCtrl",
    controllerAs: "home"
  })
}])

.controller('HomeCtrl', function($resource) {
  var home = this;

  home.pixabayApi = $resource("https://pixabay.com/api/?key=1835217-f660445e7f88a77e646ed233c", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});

  if (annyang) {
    var commands = {
      'search *term': function(term) {
        home.showTerm = "Search " + term;
        console.log("Search " + term);
        home.showPhotos = home.pixabayApi.get({q: term, image_type: 'photo'});
      }
    };
    annyang.addCommands(commands);

    annyang.start();
  }
})
