'use strict';

angular.module('weebly2App')
  .factory('Pages', function (Auth, $http) {
    // Service logic
    // ...
   //     return $resource('/api/pages/:id', {id: @id}); // read more about $resource

    //};

    var o = {}
     o.getAll=  function(){

      return $http.get('/api/users/'+Auth.getCurrentUser()._id+'/pages');

     }

     o.getOne=  function(id){

      return $http.get('/api/users/'+Auth.getCurrentUser()._id+'/pages/'+id);

     }

  o.save=  function(page){
      return $http.post('/api/users/'+Auth.getCurrentUser()._id +'/pages/', page);
     }

       o.deleteOne=  function(id){
      return $http.delete('/api/users/'+Auth.getCurrentUser()._id+'/pages/'+id);
     }

     o.editOne=  function(page){
      return $http.delete('/api/users/'+Auth.getCurrentUser()._id+'/pages/'+page._id);
     }





    // var currentuser= Auth.getCurrentUser();
    //     console.log(currentuser);
    // return $resource('/api/users/'+currentuser._id+'/pages/:id', {
    //   id: '@_id'
    // });
  return o;

  });
