import headerCtrl from './header.ctrl';


const sharedModule = angular.module('shared', []);

angular.module('shared')
    .controller('headerCtrl', headerCtrl);

export default sharedModule;