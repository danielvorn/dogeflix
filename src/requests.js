const API_KEY = "38a4c0f9641a88f16e561bb020cc3880"

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;