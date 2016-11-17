testApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/dashbord.html",
      controller: "dashController"
    })
    .when("/:id", {
      templateUrl: "templates/profile.html",
      controller: "profileController"
    })
    .when("/edit/:id", {
      templateUrl: "templates/edit.html",
      controller: "editController"
    })
});
