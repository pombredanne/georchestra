var groupServices = angular.module('groupServices', ['ngResource']);

groupServices.factory('Group',
  ['$resource', 'LDAP_BASE_URI', function($resource, baseUri){
    return $resource(baseUri + 'groups', {}, {
      query: {
        cache: true,
        method:'GET',
        isArray:true
      }
    });
  }]
);
