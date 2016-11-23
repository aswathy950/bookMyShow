import cameraFactory from './profile.factory';
import profileCtrl from './profile.ctrl';
import profileRoutes from './profile.routes';

const profileModule = angular.module('profile', []);

angular.module('profile')
    .config(profileRoutes)
    .factory('cameraFactory', cameraFactory)
    .controller('profileCtrl', profileCtrl);

export default profileModule;