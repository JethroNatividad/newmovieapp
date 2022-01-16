const apiKey = process.env.MOVIE_API_KEY
const navItems = [
    { id: 'trending', title: 'Trending', endpoint: `/trending/all/week?api_key=${apiKey}&language=en-US` },
    { id: 'toprated', title: 'Top Rated', endpoint: `/movie/top_rated?api_key=${apiKey}&language=en-US` },
    { id: 'action', title: 'Action', endpoint: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28` },
    { id: 'comedy', title: 'Comedy', endpoint: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35` },
    { id: 'horror', title: 'Horror', endpoint: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27` },
    { id: 'romance', title: 'Romance', endpoint: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749` },
    { id: 'mystery', title: 'Mystery', endpoint: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648` },
]

export default navItems