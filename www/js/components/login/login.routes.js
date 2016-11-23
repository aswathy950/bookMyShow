import loginView from './login.view.html';

function loginRoutes($stateProvider) {
    $stateProvider
        .state('app.login', {
            url: "",
            views: {
                'content@': {
                    template: loginView,
                    controller: 'loginCtrl',
                    controllerAs: 'vm'
                }
            }
        });
}

export default loginRoutes;