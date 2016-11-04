(function() {
    'use strict';

    var bookMyshow_HomeRoutes = function($stateProvider) {
        $stateProvider
            .state({
                name: 'bk.home',
                url: '',
                abstract: true
            })
            .state({
                name: 'bk.home.movie',
                url: '/movie',
                views: {
                    'content@': {
                        templateUrl: 'partials/home/home.html',
                        controller: ''
                    }
                }
            })
    };
    angular.module('bookMyshow.home')
        .config(bookMyshow_HomeRoutes);
})();