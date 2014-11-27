'use strict';

angular.module('weebly2App')
  .factory('Pages', function (Auth, $resource) {
    // Service logic
    // ...
   //     return $resource('/api/pages/:id', {id: @id}); // read more about $resource

    //};

    var currentuser= Auth.getCurrentUser();
        console.log(currentuser);
debugger;
    return $resource('/api/users/'+currentuser._id+'/pages/:id', {
      id: '@_id'
    });

  });
