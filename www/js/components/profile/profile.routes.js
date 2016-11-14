import profileTabView from './profile.view.html';

function ProfileRoutes($stateProvider) {
    $stateProvider
        .state('app.profile', {
            url: "/profile",
            views: {
                'content@': {
                    template: profileTabView,
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile'
                }
            }
        });
}

export default ProfileRoutes;
