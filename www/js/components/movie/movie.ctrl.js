class movieCtrl {
    constructor($state, movieService) {
        var vm = this;
        console.log(vm.selectCity)
        movieService.movieLists().then(function(response) {
        	console.log(response.data)
            vm.movieLists = response.data.EKM;
        });
    }
}

export default movieCtrl;