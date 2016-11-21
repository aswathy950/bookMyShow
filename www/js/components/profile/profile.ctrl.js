class profileCtrl {
    constructor(cameraFactory) {
        var vm = this;
        vm.getPicture = getPicture;
        vm.takePicture = takePicture;
        vm.profPicture = profPicture;
        vm.options = {
            quality: 75,
            targetWidth: 200,
            targetHeight: 200,
        };

        function profPicture(options) {
            cameraFactory.getPicture(options).then(function(imageData) {
                vm.picture = imageData;
            }, function(err) {
                console.log(err);
            });
        };

        function getPicture() {
            vm.options.sourceType = 0;
            vm.profPicture(vm.options);

        };

        function takePicture() {
            vm.options.sourceType = 1;
            vm.profPicture(vm.options);
        };
    }
}

export default profileCtrl;