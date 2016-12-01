class headerCtrl {
    constructor($state, $ionicHistory) {
        var vm = this;
        vm.logOut = logOut;

        function logOut() {
            $state.go('app.login');
        };


    }
}

export default headerCtrl;