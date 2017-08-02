angular.module('keepUserApp')
    .controller('UserFormController', ['$rootScope', '$http', '$scope', '$filter', '$state', '$stateParams', function($rootScope, $http, $scope, $filter, $state, $stateParams) {
        if ($stateParams.id) {
            if ($stateParams.id == 'new') {
                $scope.user = { "situation": 0 };
            } else if (angular.isNumber(parseInt($stateParams.id))) {
                $http({
                    method: 'GET',
                    params: { "id": parseInt($stateParams.id) },
                    url: 'http://localhost:8080/keep-user/users',
                }).then(function mySuccess(response) {
                    $scope.user = response.data;
                }, function myError(response) {
                    $rootScope.addDanger("Erro ao consultar o registro. Tente novamente");
                });
            }
        }

        $scope.profiles = [
            { "code": 0, "name": 'Aluno' },
            { "code": 1, "name": 'Gestor Municipal' },
            { "code": 2, "name": 'Gestor Estadual' },
            { "code": 3, "name": 'Gestor Nacional' }
        ];

        $scope.save = function() {
            if ($('#userForm').validator('validate').has('.has-error').length === 0) {
                // form is valid
                if ($scope.user.id) {
                    $http({
                        method: 'PUT',
                        data: $scope.user,
                        url: 'http://localhost:8080/keep-user/users',
                    }).then(function mySuccess(response) {
                        $scope.user = response.data;
                        $state.go('userlist');
                        $rootScope.addSuccess("Alteração efetuada com sucesso!");
                    }, function myError(response) {
                        $rootScope.addDanger("Erro ao alterar o registro. Tente novamente");
                    });
                } else {
                    $http({
                        method: 'POST',
                        data: $scope.user,
                        url: 'http://localhost:8080/keep-user/users',
                    }).then(function mySuccess(response) {
                        $scope.user = response.data;
                        $state.go('userlist');
                        $rootScope.addSuccess("Cadastro efetuado com sucesso!");
                    }, function myError(response) {
                        $rootScope.addDanger("Erro ao salvar o registro. Tente novamente");
                    });
                }
            }
        };

        $http({
            method: 'GET',
            url: 'http://localhost:8080/keep-user/userfunctions',
        }).then(function mySuccess(response) {
            $scope.functions = response.data;
        }, function myError(response) {
            $rootScope.addDanger("Erro ao consultar o registro. Tente novamente");
        });
    }]);