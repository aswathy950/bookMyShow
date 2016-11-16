import movieCtrl from './movie.ctrl';
import routes from './movie.routes';

const movieModule = angular.module('movie', []);

angular.module('movie')
    .config(routes)
    .controller('movieCtrl', movieCtrl);

export default movieModule;