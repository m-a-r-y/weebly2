'use strict';

angular.module('weebly2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
        .state('main.page', {
        url: 'pages/:id',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl'
      });
  });
