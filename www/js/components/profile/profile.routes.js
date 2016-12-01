import profileView from './profile.view.html';

function profileRoutes($stateProvider) {
    $stateProvider
        .state('app.home.profile', {
            url: "/profile",
            data: {
                requireLogin: true
            },
            views: {
                'content@': {
                    template: profileView,
                    controller: 'profileCtrl',
                    controllerAs: 'vm'
                }
            }
        });
}

export default profileRoutes;