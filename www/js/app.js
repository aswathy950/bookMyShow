// Ionic Starter App
import 'ionic.app.scss';

import router from './app.router';
import sharedModule from './components/shared';
import loginModule from './components/login';
import movieModule from './components/movie';
import profileModule from './components/profile';
import theatreModule from './components/theatre';
import bookingModule from './components/booking';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('BookMyShow', [
    'ionic',
    sharedModule.name,
    loginModule.name,
    movieModule.name,
    profileModule.name,
    theatreModule.name,
    bookingModule.name,

])

.run(function($ionicPlatform, $rootScope, $state) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            var pageData = "";
            if (toState.data) {
                pageData = toState.data;
            }
            var loggedIn = localStorage.getItem("loggedIn");

            // handle accessing homes pages for logged in users
            if (loggedIn && pageData && pageData.requireLogin === false) {
                event.preventDefault();
                if (toState.name === 'app.login') {
                    $state.transitionTo('app.home.movie', {}, {
                        reload: true
                    });
                }
            }

            // handle accessing inner pages for non-logged in users
            if (!loggedIn && pageData && pageData.requireLogin === true) {
                event.preventDefault();
                if (toState.name !== 'app.login') {
                    $state.transitionTo('app.login', {}, {
                        reload: true
                    });
                }
            }
        });
    })
    .config(router)
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
    });