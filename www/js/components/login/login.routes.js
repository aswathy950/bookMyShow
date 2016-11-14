import loginView from './login.view.html';

function loginRoutes($stateProvider) {
    $stateProvider
        .state('app.login', {
            url: "/login",
            views: {
                'content@': {
                    template: loginView,
                    controller: 'loginCtrl',
                    controllerAs: 'login'
                }
            }
        });
}

export default loginRoutes;
