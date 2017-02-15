class headerCtrl {
    constructor($state, $ionicHistory, $window) {
        var vm = this;
        vm.logOut = logOut;
        vm.myGoBack = myGoBack;

        function logOut() {
            localStorage.removeItem("loggedIn");
            $state.go('app.login');
        };

        function myGoBack($ionicHistory) {
        	$window.history.back();
        };
    }
}

export default headerCtrl;