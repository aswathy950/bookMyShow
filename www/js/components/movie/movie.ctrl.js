class movieCtrl {
    constructor($state, movieService) {
        var vm = this;

        movieService.movieLists().then(function(response) {
            vm.movieLists = response.data;
        });
    }
}

export default movieCtrl;