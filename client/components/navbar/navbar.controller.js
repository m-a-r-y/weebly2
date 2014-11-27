'use strict';

angular.module('weebly2App')
  .controller('NavbarCtrl', function ($scope, $location, Pages, Auth, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    function init(){
      console.log("inside init")
      $http.get("/api/pages").then(function(res){

        console.log(res);
      })

    };

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };



    $scope.isActive = function(route) {
      return route === $location.path();
    };

    init();

    $scope.addPage = function(page) {


    };

    $scope.removePage = function() {
      alert("gone!");
      $(".page").remove();
    }

  });
