class headerCtrl {
    constructor($state) {
        var vm = this;
        vm.logOut = logOut;

        function logOut() {
            $state.go('app.login');
        }

    }
}

export default headerCtrl;