class headerCtrl {
    constructor($state, $ionicHistory) {
        var vm = this;
        vm.logOut = logOut;
        vm.myGoBack = myGoBack;

        function logOut() {
            $state.go('app.login');
        };
        function myGoBack() {
        	console.log("hjgyjg")
            $ionicHistory.goBack();
        };

    }
}

export default headerCtrl;