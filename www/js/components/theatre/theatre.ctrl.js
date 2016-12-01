class theatreCtrl {
    constructor($state, $stateParams, theatreService) {
        var vm = this;
        vm.currentCity = $stateParams.city;
        vm.movie = $stateParams.movie;

        theatreService.theatreLists().then(function(response) {            
            angular.forEach(response.data, function(value, key) {
                if (key === vm.currentCity) {
                    angular.forEach(value, function(value, key) {
                        if (key === vm.movie) {
                        	vm.theatreLists = value;
                        }
                    });
                }
            });
        });
    }
}

export default theatreCtrl;