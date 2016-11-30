import headerView from './views/header.html';
import footerView from './views/footer.html';

function AppRouter($stateProvider) {
    'use strict';
    $stateProvider
        .state('app', {
            url: "",
            abstract: true
        })
        .state('app.home', {
            url: "/",
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
}

export default AppRouter;