var testApp = angular.module("testApp", ["ngRoute"]);

testApp.controller("dashController", [
  "$scope",
  "profileService",
  function(
    $scope,
    profileService
  ) {

    $scope.profiles = profileService.profiles;

}]);

testApp.controller("profileController", [
  "$scope",
  "$routeParams",
  "profileService",
  function(
    $scope,
    $routeParams,
    profileService
  ) {

    $scope.profiles = profileService.profiles;

    $scope.id = $routeParams.id - 1;
}]);

testApp.controller("editController", [
  "$scope",
  "$routeParams",
  "$location",
  "profileService",
  function(
    $scope,
    $routeParams,
    $location,
    profileService
  ) {

    $scope.profiles = profileService.profiles;

    $scope.$watch("profiles", function() {
      profileService.profiles = $scope.profiles;
    });

    $scope.id = $routeParams.id - 1;

    $scope.sumbit = function() {
      $location.path("/");
    }

}]);
