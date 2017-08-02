angular.module('keepUserApp')

.controller('UserListController', ['$http', '$scope', '$filter', '$state', function($http, $scope, $filter, $state) {
        $scope.loadUser = function load($http, $scope) {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/keep-user/users',
            }).then(function mySuccess(response) {
                $scope.rows = response.data;
                console.log($scope.rows);

                $scope.rows.forEach(function(row) {
                    row.configHabilitado = function configHabilitado() {
                        console.log("oi;");
                    };
                }, this);
            }, function myError(response) {
                alert(response);
            });
        };
        $scope.loadUser($http, $scope);
        //remove to the real data holder
        $scope.removeItem = function removeItem(row) {
            $http({
                method: 'DELETE',
                params: { "id": row.id },
                url: 'http://localhost:8080/keep-user/users',
            }).then(function mySuccess(response) {
                $scope.rows = response.data;
                console.log($scope.rows);
            }, function myError(response) {
                alert(response);
            });
            $scope.loadUser($http, $scope);
        };


        $scope.editItem = function editItem(row) {
            if (row.id) {
                $state.go('userform', { id: row.id });
            }
        };

        $scope.addItem = function editItem(row) {
            if (row.id) {
                $state.go('userform', { id: "new" });
            }
        };

        $scope.convertAcessProfile = function convertAcessProfile(acessProfile) {
            //  0-Aluno, 1-Gestor Municipal, 2-Gestor Estadual, 3-Gestor Nacional
            if (acessProfile === 0) {
                return "Aluno";
            }
            if (acessProfile === 1) {
                return "Gestor Municipal";
            }
            if (acessProfile == 2) {
                return "Gestor Estadual";
            }
            if (acessProfile == 3) {
                return "Gestor Nacional";
            }
        };

        $scope.predicates = ['email', 'name', 'acessProfile'];
        $scope.selectedPredicate = $scope.predicates[0];
    }])
    .controller('pipeCtrl', ['Resource', function(service) {

        var ctrl = this;

        this.displayed = [];

        this.callServer = function callServer(tableState) {

            ctrl.isLoading = true;

            var pagination = tableState.pagination;

            var start = pagination.start || 0; // This is NOT the page number, but the index of item in the list that you want to use to display the table.
            var number = pagination.number || 10; // Number of entries showed per page.

            service.getPage(start, number, tableState).then(function(result) {
                ctrl.displayed = result.data;
                tableState.pagination.numberOfPages = result.numberOfPages; //set the number of pages so the pagination can update
                ctrl.isLoading = false;
            });
        };

    }]).factory('Resource', ['$q', '$filter', '$timeout', function($q, $filter, $timeout) {

        //fake call to the server, normally this service would serialize table state to send it to the server (with query parameters for example) and parse the response
        //in our case, it actually performs the logic which would happened in the server
        function getPage(start, number, params) {

            var deferred = $q.defer();

            var filtered = params.search.predicateObject ? $filter('filter')($scope.rows, params.search.predicateObject) : $scope.rows;

            if (params.sort.predicate) {
                filtered = $filter('orderBy')(filtered, params.sort.predicate, params.sort.reverse);
            }

            var result = filtered.slice(start, start + number);

            $timeout(function() {
                //note, the server passes the information about the data set size
                deferred.resolve({
                    data: result,
                    numberOfPages: Math.ceil(filtered.length / number)
                });
            }, 1500);


            return deferred.promise;
        }

        return {
            getPage: getPage
        };
    }]);