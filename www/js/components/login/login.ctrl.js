class loginCtrl {
    constructor($state) {
        var vm = this;
        vm.submitted = false;
        vm.invalidCred = false;
        vm.keepLogged = false;
        vm.userData = JSON.parse(localStorage.getItem("userDetails"));
        if (vm.userData) {
            vm.userName = vm.userData.userName;
            vm.password = vm.userData.password;
            vm.keepLogged = true;
        }
        vm.login = login;

        function login() {
            vm.submitted = true;
            if (vm.signinForm.$valid) {
                if (vm.userName === "aswathy" && vm.password === "achu123") {
                    vm.invalidCred = false;
                    if (vm.keepLogged) {
                        vm.userDetails = {
                            userName: vm.userName,
                            password: vm.password
                        }
                        localStorage.setItem("userDetails", JSON.stringify(vm.userDetails));
                    } else {
                        localStorage.clear();
                    }
                    $state.go('app.home.movie');
                } else {
                    vm.invalidCred = true;
                }
            }

        }
    }
}

export default loginCtrl;