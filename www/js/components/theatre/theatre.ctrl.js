class theatreCtrl {
    constructor($state, theatreService) {
        var vm = this;

        theatreService.theatreLists().then(function(response) {
            vm.theatreLists = response.data;
        });
    }
}

export default theatreCtrl;