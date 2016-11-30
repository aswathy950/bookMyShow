function cameraFactory($q) {
    return {
        getPicture: function(options) {
            var q = $q.defer();
            if (!navigator.camera) {
                alert("no camera")
            } else {
                navigator.camera.getPicture(function(result) {
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }


        }
    }
}

export default cameraFactory;