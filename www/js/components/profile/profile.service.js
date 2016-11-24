function profileService($http) {
    return {
        userDetails: function() {
            return $http.get('js/components/profile/profile.json');
        }
    }
}

export default profileService;