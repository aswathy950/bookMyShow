import profileView from './profile.view.html';

function ProfileRoutes($stateProvider) {
    $stateProvider
        // .state('app.home', {
        //     url: "/",
        //     abstract: true
        // })
        .state('app.home.profile', {
            url: "/profile",
            views: {
                'content@': {
                    template: profileView,
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile'
                }
            }
        });
}

export default ProfileRoutes;