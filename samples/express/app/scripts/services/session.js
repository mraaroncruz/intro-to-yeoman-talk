'use strict';

angular.module('expressApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
