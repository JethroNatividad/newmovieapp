import React from 'react'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MoviesList
