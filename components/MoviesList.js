import Image from 'next/image'
import React from 'react'

const MoviesList = ({ movies }) => {
    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h1>{movie.title || movie.original_name}</h1>
                    <Image layout='responsive' src={`https://image.tmdb.org/t/p/original${movie.poster_path || movie.backdrop_path}`} height={1080} width={1920} alt={movie.title} />
                </div>
            ))}
        </div>
    )
}

export default MoviesList
