angular.module('keepUserApp', ['ngRoute'])

.controller('UserListController', [function() {

}])

.component('userlist', ['$routeProvider', function($routeProvider) {
    $routeProvider.when('/user/list', {
        templateUrl: 'user/list/userList.html',
        controller: 'UserListController'
    });
}]);