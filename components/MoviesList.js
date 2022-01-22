import React from 'react'
import Movie from './Movie'

const MoviesList = ({ movies }) => {
    return (
        <div className='px-5 py-5 sm:grid sm:grid-cols-2 xl:grid-cols-3'>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MoviesList
