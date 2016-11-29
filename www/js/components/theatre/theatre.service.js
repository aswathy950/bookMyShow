function theatreService($http) {
    return {
        theatreLists: function() {
            return $http.get('js/components/theatre/theatre.json');
        }
    }
}

export default theatreService;