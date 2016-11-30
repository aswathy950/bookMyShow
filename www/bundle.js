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
	
	var _shared = __webpack_require__(5);
	
	var _shared2 = _interopRequireDefault(_shared);
	
	var _login = __webpack_require__(7);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _movie = __webpack_require__(11);
	
	var _movie2 = _interopRequireDefault(_movie);
	
	var _profile = __webpack_require__(16);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _theatre = __webpack_require__(22);
	
	var _theatre2 = _interopRequireDefault(_theatre);
	
	var _booking = __webpack_require__(27);
	
	var _booking2 = _interopRequireDefault(_booking);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// Ionic Starter App
	angular.module('BookMyShow', ['ionic', _shared2.default.name, _login2.default.name, _movie2.default.name, _profile2.default.name, _theatre2.default.name, _booking2.default.name]).run(function ($ionicPlatform) {
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
	}).config(_app2.default).config(function ($ionicConfigProvider) {
	    $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
	    $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
	});

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
	                template: _header2.default,
	                controller: 'headerCtrl',
	                controllerAs: 'vm'
	            }
	        }
	
	    });
	}
	
	exports.default = AppRouter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bar bar-header bar-assertive\">\n    <h1 class=\"title\">BookMyShow</h1>\n    <div class=\"buttons\">\n        <button class=\"button button-dark\" ng-click=\"vm.logOut()\">Logout</button>\n    </div>\n</div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<ion-tabs class=\"tabs-icon-top tabs-assertive\">\n    <ion-tab title=\"Movie\" icon=\"ion-home\" ui-sref=\"app.home.movie\">\n        <ion-nav-view name=\"movie-tab\"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title=\"Profile\" icon=\"ion-person\" ui-sref=\"app.home.profile\">\n        <ion-nav-view name=\"profile-tab\"></ion-nav-view>\n    </ion-tab>\n</ion-tabs>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _header = __webpack_require__(6);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sharedModule = angular.module('shared', []);
	
	angular.module('shared').controller('headerCtrl', _header2.default);
	
	exports.default = sharedModule;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var headerCtrl = function headerCtrl($state) {
	    _classCallCheck(this, headerCtrl);
	
	    var vm = this;
	    vm.logOut = logOut;
	
	    function logOut() {
	        $state.go('app.login');
	    }
	};
	
	exports.default = headerCtrl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _login = __webpack_require__(8);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login3 = __webpack_require__(9);
	
	var _login4 = _interopRequireDefault(_login3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loginModule = angular.module('login', []);
	
	angular.module('login').config(_login4.default).controller('loginCtrl', _login2.default);
	
	exports.default = loginModule;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var loginCtrl = function loginCtrl($state) {
	    _classCallCheck(this, loginCtrl);
	
	    var vm = this;
	    vm.submitted = false;
	    vm.invalidCred = false;
	    vm.keepLogged = false;
	    vm.userData = JSON.parse(localStorage.getItem("userDetails"));
	    if (vm.userData) {
	        vm.userName = vm.userData.userName;
	        vm.password = vm.userData.password;
	        vm.keepLogged = true;
	    }
	    vm.login = login;
	
	    function login() {
	        vm.submitted = true;
	        if (vm.signinForm.$valid) {
	            if (vm.userName === "aswathy" && vm.password === "achu123") {
	                vm.invalidCred = false;
	                if (vm.keepLogged) {
	                    vm.userDetails = {
	                        userName: vm.userName,
	                        password: vm.password
	                    };
	                    localStorage.setItem("userDetails", JSON.stringify(vm.userDetails));
	                } else {
	                    localStorage.clear();
	                }
	                $state.go('app.home.movie');
	            } else {
	                vm.invalidCred = true;
	            }
	        }
	    }
	};
	
	exports.default = loginCtrl;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _loginView = __webpack_require__(10);
	
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
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loginForm\">\n    <img src=\"./img/bookmyshow.png\">\n    <form name=\"vm.signinForm\" ng-submit=\"vm.login()\" autocomplete=\"off\" novalidate>\n        <div class=\"list\">\n            <label class=\"item item-input\">\n                <span class=\"input-label\">Username</span>\n                <input type=\"text\" name=\"userName\" id=\"userName\" ng-model=\"vm.userName\" required autofocus ng-change=\"vm.invalidCred = flase\">\n            </label>\n            <p class=\"help-block\" ng-show=\"vm.submitted && vm.signinForm.userName.$error.required\">Username required</p>\n            <label class=\"item item-input\">\n                <span class=\"input-label\">Password</span>\n                <input type=\"password\" name=\"password\" id=\"password\" ng-model=\"vm.password\" required ng-change=\"vm.invalidCred = flase\">\n            </label>\n            <p class=\"help-block\" ng-show=\"vm.submitted && vm.signinForm.password.$error.required\">Password required</p>\n        </div>\n        <p class=\"help-block\" ng-show=\"vm.invalidCred\">Invalid credentials</p>\n        <button class=\"button button-full button-assertive\" type=\"submit\">\n            LOGIN\n        </button>\n    </form>\n</div>\n<ion-checkbox ng-model=\"vm.keepLogged\">Keep me logged in</ion-checkbox>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _movie = __webpack_require__(12);
	
	var _movie2 = _interopRequireDefault(_movie);
	
	var _movie3 = __webpack_require__(13);
	
	var _movie4 = _interopRequireDefault(_movie3);
	
	var _movie5 = __webpack_require__(14);
	
	var _movie6 = _interopRequireDefault(_movie5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var movieModule = angular.module('movie', []);
	
	angular.module('movie').config(_movie6.default).service('movieService', _movie2.default).controller('movieCtrl', _movie4.default);
	
	exports.default = movieModule;

/***/ },
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _movieView = __webpack_require__(15);
	
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\">\n    <label class=\"item item-input item-select\">\n        <div class=\"input-label\">\n            Select your city:\n        </div>\n        <select>\n            <option>TVM</option>\n            <option selected>EKM</option>\n        </select>\n    </label>\n</div>\n<div class=\"movieList\">\n    <div class=\"list\">\n        <a class=\"item item-thumbnail-left\" ng-repeat=\"movieList in  vm.movieLists\" ui-sref=\"app.home.theatre\">\n            <img ng-src=\"./img/{{movieList.img}}\">\n            <h2>{{movieList.name}}</h2>\n            <p>{{movieList.desc}}</p>\n        </a>\n    </div>\n</div>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profile = __webpack_require__(17);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _profile3 = __webpack_require__(18);
	
	var _profile4 = _interopRequireDefault(_profile3);
	
	var _profile5 = __webpack_require__(19);
	
	var _profile6 = _interopRequireDefault(_profile5);
	
	var _profile7 = __webpack_require__(20);
	
	var _profile8 = _interopRequireDefault(_profile7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var profileModule = angular.module('profile', []);
	
	angular.module('profile').config(_profile8.default).factory('cameraFactory', _profile2.default).service('profileService', _profile4.default).controller('profileCtrl', _profile6.default);
	
	exports.default = profileModule;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function cameraFactory($q) {
	    return {
	        getPicture: function getPicture(options) {
	            var q = $q.defer();
	            if (!navigator.camera) {
	                alert("no camera");
	            } else {
	                navigator.camera.getPicture(function (result) {
	                    q.resolve(result);
	                }, function (err) {
	                    q.reject(err);
	                }, options);
	
	                return q.promise;
	            }
	        }
	    };
	}
	
	exports.default = cameraFactory;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function profileService($http) {
	    return {
	        userDetails: function userDetails() {
	            return $http.get('js/components/profile/profile.json');
	        }
	    };
	}
	
	exports.default = profileService;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var profileCtrl = function profileCtrl(cameraFactory, profileService) {
	    _classCallCheck(this, profileCtrl);
	
	    var vm = this;
	    vm.userDetails = {};
	    vm.getPicture = getPicture;
	    vm.takePicture = takePicture;
	    vm.profPicture = profPicture;
	    vm.options = {
	        allowEdit: true,
	        quality: 75,
	        targetWidth: 200,
	        targetHeight: 200
	    };
	
	    profileService.userDetails().then(function (response) {
	        vm.userDetails = response.data;
	        vm.picture = "./img/" + vm.userDetails.profPic;
	    });
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _profileView = __webpack_require__(21);
	
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
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"profileImg\">\n    <img ng-src=\"{{vm.picture}}\">\n    <div class=\"changeProfile\">\n        <button class=\"button  button-small button-assertive\" ng-click=\"vm.takePicture()\">Take Picture</button>\n        <button class=\"button  button-small button-assertive\" ng-click=\"vm.getPicture()\">Open Gallery</button>\n    </div>\n</div>\n<div class=\"profileData\">\n    <div class=\"list\">\n        <label class=\"item item-input item-stacked-label\">\n            <span class=\"input-label\">Name</span>\n            <input type=\"text\" ng-model=\"vm.userDetails.Name\">\n        </label>\n        <label class=\"item item-input item-stacked-label\">\n            <span class=\"input-label\">Email</span>\n            <input type=\"text\" ng-model=\"vm.userDetails.Email\">\n        </label>\n        <label class=\"item item-input item-stacked-label\">\n            <span class=\"input-label\">Phone</span>\n            <input type=\"text\" ng-model=\"vm.userDetails.Phone\">\n        </label>\n    </div>\n</div>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _theatre = __webpack_require__(23);
	
	var _theatre2 = _interopRequireDefault(_theatre);
	
	var _theatre3 = __webpack_require__(24);
	
	var _theatre4 = _interopRequireDefault(_theatre3);
	
	var _theatre5 = __webpack_require__(25);
	
	var _theatre6 = _interopRequireDefault(_theatre5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var theatreModule = angular.module('theatre', []);
	
	angular.module('theatre').config(_theatre6.default).service('theatreService', _theatre2.default).controller('theatreCtrl', _theatre4.default);
	
	exports.default = theatreModule;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function theatreService($http) {
	    return {
	        theatreLists: function theatreLists() {
	            return $http.get('js/components/theatre/theatre.json');
	        }
	    };
	}
	
	exports.default = theatreService;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var theatreCtrl = function theatreCtrl($state, theatreService) {
	    _classCallCheck(this, theatreCtrl);
	
	    var vm = this;
	
	    theatreService.theatreLists().then(function (response) {
	        vm.theatreLists = response.data;
	    });
	};
	
	exports.default = theatreCtrl;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _theatreView = __webpack_require__(26);
	
	var _theatreView2 = _interopRequireDefault(_theatreView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function theatreRoutes($stateProvider) {
	    $stateProvider.state('app.home.theatre', {
	        url: "theatre",
	        views: {
	            'content@': {
	                template: _theatreView2.default,
	                controller: 'theatreCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    });
	}
	
	exports.default = theatreRoutes;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"movieList\">\n    <div class=\"list\">\n        <a class=\"item item-thumbnail-left\" ng-repeat=\"theatreList in  vm.theatreLists\" ui-sref=\"app.home.booking\">\n            <img ng-src=\"./img/{{theatreList.img}}\">\n            <h2>{{theatreList.name}}</h2>\n            <p>{{theatreList.place}}</p>\n        </a>\n    </div>\n</div>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _booking = __webpack_require__(28);
	
	var _booking2 = _interopRequireDefault(_booking);
	
	var _booking3 = __webpack_require__(29);
	
	var _booking4 = _interopRequireDefault(_booking3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var bookingModule = angular.module('booking', []);
	
	angular.module('booking').config(_booking4.default).controller('bookingCtrl', _booking2.default);
	
	exports.default = bookingModule;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bookingCtrl = function bookingCtrl($state) {
	    _classCallCheck(this, bookingCtrl);
	
	    var vm = this;
	};
	
	exports.default = bookingCtrl;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _bookingView = __webpack_require__(30);
	
	var _bookingView2 = _interopRequireDefault(_bookingView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bookingRoutes($stateProvider) {
	    $stateProvider.state('app.home.booking', {
	        url: "booking",
	        views: {
	            'content@': {
	                template: _bookingView2.default,
	                controller: 'bookingCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    });
	}
	
	exports.default = bookingRoutes;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\">\n    <label class=\"item item-input item-select\">\n        <div class=\"input-label\">\n            Select number of seats:\n        </div>\n        <select>\n            <option selected>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n            <option>6</option>\n        </select>\n    </label>\n</div>\n<div class=\"movieList\">\n    <ion-list>\n        <div class=\"input-label showTime\">\n            Select show time:\n        </div>\n        <ion-radio ng-model=\"showTime\" ng-value=\"'A'\">8.30 AM</ion-radio>\n        <ion-radio ng-model=\"showTime\" ng-value=\"'B'\">11.30 AM</ion-radio>\n        <ion-radio ng-model=\"showTime\" ng-value=\"'C'\">6.30 PM</ion-radio>\n        <ion-radio ng-model=\"showTime\" ng-value=\"'D'\">9.30 PM</ion-radio>\n    </ion-list>\n</div>\n<button class=\"button button-full button-clear button-assertive\">\n    BOOK NOW\n</button>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map