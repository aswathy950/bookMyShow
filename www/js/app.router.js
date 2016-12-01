import headerView from './views/header.html';
import footerView from './views/footer.html';

function AppRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    'use strict';
    $stateProvider
        .state('app', {
            url: "",
            abstract: true
        })
        .state('app.home', {
            url: "/home",
            abstract: true,
            views: {
                'footer@': {
                    template: footerView
                },
                'header@': {
                    template: headerView,
                    controller: 'headerCtrl',
                    controllerAs: 'vm'
                }
            }

        });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

export default AppRouter;