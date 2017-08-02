var app = angular.module('keepUserApp', ['ui.router', 'ui.bootstrap', 'smart-table']);

app.config(function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');
    $stateProvider
        .state('home', { url: '/home', templateUrl: 'components/home.html' })
        .state('userlist', { url: '/user/list', controller: 'UserListController', templateUrl: 'user/list/userList.html' })
        .state('userform', { url: '/user/form', controller: 'UserFormController', templateUrl: 'user/form/userForm.html' });
});