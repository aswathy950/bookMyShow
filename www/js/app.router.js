import headerView from './views/header.html';
import footerView from './views/footer.html';

function AppRouter($stateProvider) {
    'use strict';
    $stateProvider
        .state('app', {
            url: "",
            abstract: true,
            views: {
                'header@': {
                    template: headerView
                }
            }

        })
        .state('app.home', {
            url: "/",
            abstract: true,
            views: {
                'footer@': {
                    template: footerView
                }
            }

        });
}

export default AppRouter;