/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _login = __webpack_require__(5);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _movie = __webpack_require__(9);
	
	var _movie2 = _interopRequireDefault(_movie);
	
	var _profile = __webpack_require__(14);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	angular.module('BookMyShow', ['ionic', _login2.default.name, _movie2.default.name, _profile2.default.name]).run(function ($ionicPlatform) {
	    $ionicPlatform.ready(function () {
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
	}).config(_app2.default); // Ionic Starter App

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _header = __webpack_require__(3);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(4);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppRouter($stateProvider) {
	    'use strict';
	
	    $stateProvider.state('app', {
	        url: "",
	        abstract: true
	    }).state('app.home', {
	        url: "/",
	        abstract: true,
	        views: {
	            'footer@': {
	                template: _footer2.default
	            },
	            'header@': {
	                template: _header2.default
	            }
	        }
	
	    });
	}
	
	exports.default = AppRouter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bar bar-header bar-assertive\">\n    <h1 class=\"title\">BookMyShow</h1>   \n</div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<ion-tabs class=\"tabs-icon-bottom tabs-assertive\">\n    <ion-tab title=\"movie\" icon=\"ion-home\" ui-sref=\"app.home.movie\">\n        <ion-nav-view name=\"movie-tab\"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title=\"Profile\" icon=\"ion-person\" ui-sref=\"app.home.profile\">\n        <ion-nav-view name=\"profile-tab\"></ion-nav-view>\n    </ion-tab>\n</ion-tabs>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _login = __webpack_require__(6);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login3 = __webpack_require__(7);
	
	var _login4 = _interopRequireDefault(_login3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loginModule = angular.module('login', []);
	
	angular.module('login').config(_login4.default).controller('loginCtrl', _login2.default);
	
	exports.default = loginModule;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var loginCtrl = function loginCtrl($state) {
	    _classCallCheck(this, loginCtrl);
	
	    var vm = this;
	    vm.login = login;
	
	    function login() {
	        if (vm.userName === "aswathy" && vm.password === "achu123") {
	            $state.go('app.home.movie');
	        } else {
	            alert("INVALID CREDENTIALS");
	        }
	    }
	};
	
	exports.default = loginCtrl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _loginView = __webpack_require__(8);
	
	var _loginView2 = _interopRequireDefault(_loginView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function loginRoutes($stateProvider) {
	    $stateProvider.state('app.login', {
	        url: "",
	        views: {
	            'content@': {
	                template: _loginView2.default,
	                controller: 'loginCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    });
	}
	
	exports.default = loginRoutes;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loginForm\">\n\t<img src=\"./img/bookmyshow.png\">\n    <div class=\"list\">\n        <label class=\"item item-input\">\n            <span class=\"input-label\">Username</span>\n            <input type=\"text\" ng-model=\"vm.userName\">\n        </label>\n        <label class=\"item item-input\">\n            <span class=\"input-label\">Password</span>\n            <input type=\"password\" ng-model=\"vm.password\">\n        </label>\n    </div>\n    <button class=\"button button-full button-assertive\" ng-click=\"vm.login()\">\n        LOGIN\n    </button>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _movie = __webpack_require__(10);
	
	var _movie2 = _interopRequireDefault(_movie);
	
	var _movie3 = __webpack_require__(11);
	
	var _movie4 = _interopRequireDefault(_movie3);
	
	var _movie5 = __webpack_require__(12);
	
	var _movie6 = _interopRequireDefault(_movie5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var movieModule = angular.module('movie', []);
	
	angular.module('movie').config(_movie6.default).service('movieService', _movie2.default).controller('movieCtrl', _movie4.default);
	
	exports.default = movieModule;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function movieService($http) {
	    return {
	        movieLists: function movieLists() {
	            return $http.get('js/components/movie/movie.json');
	        }
	    };
	}
	
	exports.default = movieService;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var movieCtrl = function movieCtrl($state, movieService) {
	    _classCallCheck(this, movieCtrl);
	
	    var vm = this;
	
	    movieService.movieLists().then(function (response) {
	        vm.movieLists = response.data;
	    });
	};
	
	exports.default = movieCtrl;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _movieView = __webpack_require__(13);
	
	var _movieView2 = _interopRequireDefault(_movieView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function movieRoutes($stateProvider) {
	    $stateProvider.state('app.home.movie', {
	        url: "movie",
	        views: {
	            'content@': {
	                template: _movieView2.default,
	                controller: 'movieCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    });
	}
	
	exports.default = movieRoutes;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\">\n    <label class=\"item item-input item-select\">\n        <div class=\"input-label\">\n            Select your city:\n        </div>\n        <select>\n            <option>TVM</option>\n            <option selected>EKM</option>\n        </select>\n    </label>\n</div>\n<div class=\"list\">\n    <a class=\"item item-thumbnail-left\" ng-repeat=\"movieList in  vm.movieLists\">\n        <img ng-src=\"./img/{{movieList.img}}\">\n        <h2>{{movieList.name}}</h2>\n        <p>{{movieList.desc}}</p>\n    </a>\n</div>\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profile = __webpack_require__(15);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _profile3 = __webpack_require__(16);
	
	var _profile4 = _interopRequireDefault(_profile3);
	
	var _profile5 = __webpack_require__(17);
	
	var _profile6 = _interopRequireDefault(_profile5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var profileModule = angular.module('profile', []);
	
	angular.module('profile').config(_profile6.default).factory('cameraFactory', _profile2.default).controller('profileCtrl', _profile4.default);
	
	exports.default = profileModule;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function cameraFactory($q) {
	    return {
	        getPicture: function getPicture(options) {
	            var q = $q.defer();
	
	            navigator.camera.getPicture(function (result) {
	                q.resolve(result);
	            }, function (err) {
	                q.reject(err);
	            }, options);
	
	            return q.promise;
	        }
	    };
	}
	
	exports.default = cameraFactory;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var profileCtrl = function profileCtrl(cameraFactory) {
	    _classCallCheck(this, profileCtrl);
	
	    var vm = this;
	    vm.getPicture = getPicture;
	    vm.takePicture = takePicture;
	    vm.profPicture = profPicture;
	    vm.options = {
	        quality: 75,
	        targetWidth: 200,
	        targetHeight: 200
	    };
	
	    function profPicture(options) {
	        cameraFactory.getPicture(options).then(function (imageData) {
	            vm.picture = imageData;
	        }, function (err) {
	            console.log(err);
	        });
	    };
	
	    function getPicture() {
	        vm.options.sourceType = 0;
	        vm.profPicture(vm.options);
	    };
	
	    function takePicture() {
	        vm.options.sourceType = 1;
	        vm.profPicture(vm.options);
	    };
	};
	
	exports.default = profileCtrl;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profileView = __webpack_require__(18);
	
	var _profileView2 = _interopRequireDefault(_profileView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function profileRoutes($stateProvider) {
	    $stateProvider.state('app.home.profile', {
	        url: "profile",
	        views: {
	            'content@': {
	                template: _profileView2.default,
	                controller: 'profileCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    });
	}
	
	exports.default = profileRoutes;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<img ng-src=\"{{vm.picture}}\" src=\"./img/kali.jpg\">\n<button class=\"button  button-block button-positive\" ng-click=\"vm.takePicture()\">Take Picture</button>\n<button class=\"button  button-block button-positive\" ng-click=\"vm.getPicture()\">Open Gallery</button>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map