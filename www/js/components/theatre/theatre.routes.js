import theatreView from './theatre.view.html';

function theatreRoutes($stateProvider) {
    $stateProvider
        .state('app.home.theatre', {
            url: "/theatre?city?movie",
            data: {
                requireLogin: true
            },
            views: {
                'content@': {
                    template: theatreView,
                    controller: 'theatreCtrl',
                    controllerAs: 'vm'
                }
            }
        });
}

export default theatreRoutes;