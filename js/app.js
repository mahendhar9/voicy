angular.module('voicy', ['ui.router'])
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

.controller('HomeCtrl', function() {
  var home = this;
  if (annyang) {
    var commands = {
      'say hello': function() {
        alert("Hello Mahendhar");
      }
    };

    annyang.addCommands(commands);

    annyang.start();
  }
})
