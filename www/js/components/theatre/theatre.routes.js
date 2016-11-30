import theatreView from './theatre.view.html';

function theatreRoutes($stateProvider) {
    $stateProvider
        .state('app.home.theatre', {
            url: "theatre",
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