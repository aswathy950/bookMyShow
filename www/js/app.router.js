import headerView from './views/header.html';

function AppRouter($stateProvider) {
    'use strict';
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            views: {
                'header@': {
                    template: headerView
                }
            }

        });
}

export default AppRouter;