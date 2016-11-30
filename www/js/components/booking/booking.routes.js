import bookingView from './booking.view.html';

function bookingRoutes($stateProvider) {
    $stateProvider
        .state('app.home.booking', {
            url: "booking",
            views: {
                'content@': {
                    template: bookingView,
                    controller: 'bookingCtrl',
                    controllerAs: 'vm'
                }
            }
        });
}

export default bookingRoutes;