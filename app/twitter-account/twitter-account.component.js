'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('twitterAccount').
  component('twitterAccount', {
    templateUrl: 'twitter-account/twitter-account.template.html',
    controller: function TwitterAccountController($http) {
      var self = this;
      self.orderProp = 'homepage';
      
      $http.get('http://localhost:3000/users').then(function(response) {
        var result = response.data;
        self.users = result;       
      });

    }
  });
