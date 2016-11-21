function movieService($http) {
    return {
        movieLists: function() {
            return $http.get('js/components/movie/movie.json');
        }
    }
}

export default movieService;