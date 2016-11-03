(function() {
    'use strict';
    
    var bookMyshow_HomeRoutes = function($stateProvider) {
        $stateProvider
            .state({
                name: 'bk.home',
                url: '/home',
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