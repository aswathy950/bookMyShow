import bookingCtrl from './booking.ctrl';
import routes from './booking.routes';

const bookingModule = angular.module('booking', []);

angular.module('booking')
    .config(routes)
    .controller('bookingCtrl', bookingCtrl);

export default bookingModule;