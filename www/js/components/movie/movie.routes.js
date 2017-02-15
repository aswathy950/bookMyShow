import movieView from './movie.view.html';

function movieRoutes($stateProvider) {
    $stateProvider
        .state('app.home.movie', {
            url: "/movie",
            data: {
                requireLogin: true
            },
            views: {
                'content@': {
                    template: movieView,
                    controller: 'movieCtrl',
                    controllerAs: 'vm'
                }
            }
        });
}

export default movieRoutes;