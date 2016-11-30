import theatreService from './theatre.service';
import theatreCtrl from './theatre.ctrl';
import routes from './theatre.routes';

const theatreModule = angular.module('theatre', []);

angular.module('theatre')
    .config(routes)
    .service('theatreService', theatreService)
    .controller('theatreCtrl', theatreCtrl);

export default theatreModule;