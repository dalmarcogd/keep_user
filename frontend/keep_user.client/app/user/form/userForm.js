angular.module('keepUserApp.user.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/user/form', {
        templateUrl: 'user/Form/userForm.html',
        controller: 'UserFormController'
    });
}])

.controller('UserFormController', [function() {

}]);