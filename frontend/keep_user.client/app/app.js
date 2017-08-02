var app = angular.module('keepUserApp', ['ui.router', 'ui.bootstrap', 'smart-table', 'ui.mask']);

app.config(function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');
    $urlRouterProvider.when('/user/form', '/user/form/new');
    $stateProvider
        .state('home', { url: '/home', templateUrl: 'components/home.html' })
        .state('userlist', { url: '/user/list', controller: 'UserListController', templateUrl: 'user/list/userList.html' })
        .state('userform', { url: '/user/form/:id', controller: 'UserFormController', templateUrl: 'user/form/userForm.html' });
});
app.controller('AlertController', function($rootScope) {
    $rootScope.alerts = [];
    $rootScope.addDanger = function addDanger(message) {
        $rootScope.alerts.push({ type: 'danger', message: message });
    }
    $rootScope.addSuccess = function addSuccess(message) {
        $rootScope.alerts.push({ type: 'success', message: message });
    }
    $rootScope.closeMessage = function closeMessage(index) {
        $rootScope.alerts.splice(index, 1);
    }
});