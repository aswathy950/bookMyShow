import loginView from './login.view.html';

function loginRoutes($stateProvider) {
    $stateProvider
        .state('app.login', {
            url: "",
            data: {
                requireLogin: false
            },
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