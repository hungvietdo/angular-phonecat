'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('userDetail', ['ngMaterial']).
  component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: function UserDetailController($http) {
      var self = this;
      self.orderProp = 'homepage';
      
      $http.get('http://localhost:3000/users').then(function(response) {
        var result = response.data;
        self.users = result;       
      });

    }
  });

  // angular.
  // module('userDetail', ['ngMaterial']).
  // component('userDetail', {
  //   templateUrl: 'phone-detail/phone-detail.template.html',
  //   controller: ['$http', '$routeParams',
  //     function UserDetailController($http, $routeParams) {
  //       var self = this;

        
  //       $http.get('http://localhost:3000/users?userId=' + $route.Params.userId).then(function(response) {
  //         var result = response.data;
  //         self.users = result;       
  //       });


  //     }
  //   ]
  // });