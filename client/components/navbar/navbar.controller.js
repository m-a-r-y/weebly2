'use strict';

angular.module('weebly2App')
  .controller('NavbarCtrl', function ($scope,$state, $location, Pages, Auth, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.pages = [] ;

    Pages.getAll().success(function(response){
      $scope.pages = response ;
      console.log(response);
    })

    function init(){

    };

    $scope.showPage = function(id){

      $state.go("main.page", {id: id});

    }
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.editOne = Pages.editOne;
    $scope.save = Pages.save;
    $scope.deleteOne = Pages.deleteOne ;


    $scope.isActive = function(route) {
      return route === $location.path();
    };

    init();

    $scope.addPage = function(page) {
      var e = $scope.page;
      $scope.pages.push(e);
      $scope.page="";
    };


    $scope.removePage = function(id) {
      $scope.pages.splice(id,1);
    }

  });
