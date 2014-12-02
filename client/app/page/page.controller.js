'use strict';

angular.module('weebly2App')
  .controller('PageCtrl', function ($scope, $stateParams, Pages) {

    $scope.page= Pages.list[$stateParams.id];
  });
