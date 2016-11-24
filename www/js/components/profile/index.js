import cameraFactory from './profile.factory';
import profileService from './profile.service';
import profileCtrl from './profile.ctrl';
import profileRoutes from './profile.routes';

const profileModule = angular.module('profile', []);

angular.module('profile')
    .config(profileRoutes)
    .factory('cameraFactory', cameraFactory)
    .service('profileService', profileService)
    .controller('profileCtrl', profileCtrl);

export default profileModule;