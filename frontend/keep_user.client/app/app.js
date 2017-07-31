angular.module('keepUserApp', ['ui.router', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
            //.state('home', { url: '/home', templateUrl: 'components/home.html' })
            //.state('userlist', { url: '/user/list', component: 'keepUserApp.user.list' })

            ;
        }
    ]);