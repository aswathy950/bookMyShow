(function() {
    'use strict';

    var bookMyshow_LoginRoutes = function($stateProvider) {
        $stateProvider
            .state({
                name: 'bk.login',
                url: '',
                views: {
                    'content@': {
                        templateUrl: 'partials/login/login.html',
                        controller: 'bookMyshow_LoginCntrl'
                    }
                }
            })
    };
    angular.module('bookMyshow.login')
        .config(bookMyshow_LoginRoutes);
})();