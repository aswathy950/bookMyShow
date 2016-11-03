(function() {
    'use strict';
    var bookMyshow_Routes = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
                name: 'bk',
                url: '',
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'partials/login/header.html',
                        controller: ''
                    }
                }
            });
    };
    angular.module('bookMyshow')
        .config(bookMyshow_Routes);
})();