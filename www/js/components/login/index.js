import loginCtrl from './login.ctrl';
import routes from './login.routes';

const loginModule = angular.module('login', []);

angular.module('login')
    .config(routes)
    .controller('loginCtrl', loginCtrl);

export default loginModule;