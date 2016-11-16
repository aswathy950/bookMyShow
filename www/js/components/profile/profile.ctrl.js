class profileCtrl {
    constructor(cameraFactory) {
        var vm = this;
        vm.getPicture = getPicture;

        function getPicture(options) {
            var options = {
                quality: 75,
                targetWidth: 200,
                targetHeight: 200,
                sourceType: 0
            };
            cameraFactory.getPicture(options).then(function(imageData) {
                vm.picture = imageData;;
            }, function(err) {
                console.log(err);
            });

        }
    }
}

export default profileCtrl;