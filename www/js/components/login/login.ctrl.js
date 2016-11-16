class loginCtrl {
    constructor($state) {
        var vm = this;
        vm.login = login;

        function login() {
            if (vm.userName === "aswathy" && vm.password === "achu123") {
                $state.go('app.home.profile');
            } else {
            	alert("INVALID CREDENTIALS")
            }

        }
    }
}

export default loginCtrl;