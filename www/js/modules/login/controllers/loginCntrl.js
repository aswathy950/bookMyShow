(function() {
    'use strict';

    var bookMyshow_LoginCntrl = function($scope, $state) {
        $scope.signIn = function() {
            $state.go('bk.home.movie');
            console.log("ghjghjg")
        }
    };
    angular.module('bookMyshow.login')
        .controller('bookMyshow_LoginCntrl', bookMyshow_LoginCntrl);
})();