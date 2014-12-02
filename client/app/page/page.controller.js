'use strict';

angular.module('weebly2App')
  .controller('PageCtrl', function ($scope, $stateParams, Pages) {
    $scope.page = {} ;

    Pages.getOne($stateParams.id).success(function(response){
      $scope.page = response;

    })

  });
