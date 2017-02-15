class movieCtrl {
    constructor($state, movieService) {
        var vm = this;
        vm.currentCity = "EKM";
        vm.updateMovies = updateMovies;
        vm.updateCity = updateCity;

        function updateMovies() {
            movieService.movieLists().then(function(response) {
                angular.forEach(response.data, function(value, key) {
                    if (key === vm.currentCity) {
                        vm.movieLists = value;
                    }
                });
            });
        }
        updateMovies();

        function updateCity() {
            updateMovies();
        }
    }
}

export default movieCtrl;